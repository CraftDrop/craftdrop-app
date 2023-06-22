from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import authenticate
from myapp.models import User, Artists, Artwork, Order
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from rest_framework import status
from .serializers import (UsersSerializers,
                          UserSerializers,
                          UserCreationSerializer, 
                          ArtistSerializers,
                          ArtistRegistrationSerializer, 
                          RegistrationSerializer,
                          ArtworkSerializer,
                          UserProfileSerializer,
                          ViewArtworkSerializer,
                          OrderSerializer)
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from datetime import datetime, timedelta
from .utils import generate_jwt_token, generate_access_token, generate_tokens
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def api_home(request):
    return render(request, 'myapp/api.html')

# fetch user  info - user must be logged in
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def UserApi(request):
    # obj = User.objects.get(user_id = request.user.)
    obj = request.user
    if not obj.is_authenticated:
        return Response({'Forbidden': 'Needs to login to gain access'}, status=403)
    data = UserSerializers(obj).data
    data['password'] = '******'
    return Response(data)

# list users
@api_view(['GET'])
def UsersApi(request, pk=None, *args, **kwargs):
    if pk == None:
        obj = User.objects.all()
        data = UsersSerializers(obj, many=True).data
        return Response(data)
    pk = int(pk)
    obj = User.objects.get(user_id = pk)
    if obj is None:
        return Response({'message': 'User does not exist!'})
    data = UsersSerializers(obj).data
    return Response(data)


# list/fetch artist(s)
@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def ArtistApi(request, pk=None, *args, **kwargs):
    if pk == None:
        obj = Artists.objects.all()
        data = ArtistSerializers(obj, many=True).data
        return Response(data)
    else:
        obj = Artists.objects.get(artist_id = pk)
        data = ArtistSerializers(obj).data
        return Response(data)

# @api_view(['POST'])
# def UserCreationApi(request):
#     if request.method == 'POST':
#         serializer = UsersSerializers(data=request.POST)
#         if serializer.is_valid():
#             print('it is valid')
#             user = serializer.save()
#             return Response({'message':'Registered successfully', 
#                              'user_id':user.user_id}, 
#                              status=status.HTTP_201_CREATED)
#     return Response({'status':'failed'})


# login
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
def login_api(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(email=email, password=password)

    if user is None:
        return Response({'error':'Invalid email or password'}, status=400)
    return Response(generate_tokens(user))


# logs user out
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_api(request):
    # Perform logout actions
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
    except KeyError:
        return Response({"error": "Refresh token is missing"}, status=400)
    except Exception:
        return Response({"error": "Invalid refresh token"}, status=400)

    return Response({"message": "Logout successful"}, status=200)


# create a user account
@api_view(['POST', 'PUT'])
def registration_api(request):
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        return Response(generate_tokens(user))
    return Response(serializer.errors, status=400)


# update user profile
@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def user_update(request):
    user = request.user
    serializer = UserSerializers(user, data=request.data, partial=True)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response({'message': 'Profile updated successfully'})
    else:
        return Response(serializer.errors, status=400)


# register as an artist - must be a registered user and logged in first.
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def artist_registration_api(request):
    user = request.user
    serializer = ArtistRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    artist = serializer.save()
    if artist is None:
        return Response({'message':'failed'}, status=400)
    return JsonResponse({'message': 'success', 'user': user.username})


# list artworks - must be and artist and must be logged in
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def artwork_listing_api(request):
    if not hasattr(request.user, 'artist'):
        return Response({'message': 'User must be an artist'})
    serializer = ArtworkSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.validated_data['artist_id'] = request.user.artist
    artwork = serializer.save()
    if artwork is None:
        return Response({'message': 'failed'}, status=400)
    return Response({'message':'success', 'artwork_id': artwork.artwork_id})


# delete user account
@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def delete_user(request):
    user = request.user
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# view artworks
@api_view(['GET'])
def view_artwork(request):
    obj = Artwork.objects.all()
    data = ViewArtworkSerializer(obj, many=True).data
    return Response(data)


# delist artworks
@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def delist_artwork(request):
    user = request.user
    if hasattr(user, 'artist'):
        artwork = user.artist.artworks.get(artwork_id = request.data.get('artwork_id'))
        title = artwork.title
        artwork.delete()
        return Response({'message': f'{title} removed'}, status=status.HTTP_204_NO_CONTENT)
    else:
        return Response({'message': 'must be a registered artist'})
    
# Search artworks
@api_view(['GET'])
def search(request, *args, **kwargs):
    q = request.GET.get('q')
    if q is not None:
        data = Artwork.objects.filter(
            Q(title__icontains=q)|
            Q(description__icontains=q)|
            Q(artist_id__user_id__full_name__icontains=q)|
            Q(medium__icontains=q)|
            Q(artist_id__style__icontains=q)|
            Q(artist_id__location__icontains=q)
        )
        serializer = ArtworkSerializer(data, many=True).data
        return Response(serializer)
    data = Artwork.objects.all()
    data = ArtworkSerializer(data, many=True).data
    return Response(data)
    

# Order management
@api_view(['GET', 'POST', 'DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def orders(request):
    if request.method == 'GET':
        orders = Order.objects.filter(user_id=request.user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            quantity = request.data.get('quantity', 1)
            artwork_id = request.data['artwork_id']
            price = Artwork.objects.get(artwork_id=artwork_id).price
            if artwork_id:
                serializer.save(user_id=request.user, total_price= price * quantity, status='processing')
                return Response(serializer.data, status=201)
            return Response({'error': 'artwork_id is  required'}, status=400)
        return Response(serializer.errors, status=400)
    
    elif request.method == 'DELETE':
        orders = Order.objects.filter(user_id = request.user)
        if orders:
            o_id = request.data.get('order_id')
            order = orders.get(order_id = o_id)
            if order:
                order.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response({'message': 'Invalid order ID'}, status=400)
        return Response({'error': 'user has no orders'}, status=400)
    else:
        return Response({'message': 'method not supported'}, status=500)