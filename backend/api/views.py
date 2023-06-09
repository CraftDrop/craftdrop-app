from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import authenticate,login, logout
from myapp.models import User, Artists
from myapp.forms import MyUserCreationForm
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import (UsersSerializers,
                          UserSerializers,
                          UserCreationSerializer, 
                          ArtistSerializers,
                          ArtistRegistrationSerializer, 
                          RegistrationSerializer,
                          ArtworkSerializer)
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
    # print(request.GET)
    # print(request.POST)
    message = """
                <h1> Craftdrop.io API endpoints </h1>
                <hr>
                <p> GET /api/  => displays the list of available API endpoints and request methods allowed </p>

                <p> GET /api/user/ => fetches the user info [uses token authentication] </p>

                <p> GET /api/users/ => fetches users info [info is limited] </p>

                <p> GET /api/artist/ => Returns all artists available </p>

                <p> POST /api/register/ => registers user and returns access and refresh_tokens in json format </p>

                <p> POST /api/token/ => generates new jwt tokens [reqires login credentials] </p>

                <p> POST /api/token/refresh/ => refreshes access token [requires the user valid refresh token] </p>

                <p> POST /api/create_artist/ => creates an artist [requires user to be logged in = needs access token for validation] </P>

                <p> POST /api/logout/ => logs user out [requires the refresh token]



    """
    return HttpResponse(message)


@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def UserApi(request):
    # obj = User.objects.get(user_id = request.user.)
    obj = request.user
    data = UserSerializers(obj).data
    data['password'] = '******'
    return Response(data)

@api_view(['GET'])
def UsersApi(request, pk=None, *args, **kwargs):
    if pk == None:
        obj = User.objects.all()
        data = UsersSerializers(obj, many=True).data
        return Response(data)
    pk = int(pk)
    obj = User.objects.get(user_id = pk)
    data = UsersSerializers(obj).data
    return Response(data)

@api_view(['GET'])
def ArtistApi(request, pk=None, *args, **kwargs):
    if pk == None:
        obj = Artists.objects.all()
        data = ArtistSerializers(obj, many=True).data
        return Response(data)

@api_view(['POST'])
def UserCreationApi(request):
    if request.method == 'POST':
        serializer = UsersSerializers(data=request.POST)
        if serializer.is_valid():
            print('it is valid')
            user = serializer.save()
            return Response({'message':'Registered successfully', 
                             'user_id':user.user_id}, 
                             status=status.HTTP_201_CREATED)
    return Response({'status':'failed'})



@api_view(['POST'])
@csrf_exempt
def login_api(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(email=email, password=password)

    if user is None:
        return Response({'error':'Invalid email or password'}, status=400)
    return Response(generate_tokens(user))

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


@api_view(['POST'])
def registration_api(request):
    serializer = RegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response(generate_tokens(user))

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def artist_registration_api(request):
    user = request.user
    print(f'user_d = {user.user_id}')
    user_id = request.user.user_id
    serializer = ArtistRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    artist = serializer.save()
    if artist is None:
        return Response({'message':'failed'}, status=400)
    return JsonResponse({'message': 'success', 'user': user.username})

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def artwork_listing_api(request):
    if not hasattr(request.user, 'artist'):
        return Response({'error': 'User must be an artist'})
    serializer = ArtworkSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    artwork = serializer.save()
    if artwork is None:
        return Response({'message': 'failed'}, status=400)
    return Response({'message':'success', 'artwork_id': artwork.artwork_id})