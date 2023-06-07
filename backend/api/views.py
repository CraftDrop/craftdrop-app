from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate,login, logout
from myapp.models import User, Artists
from myapp.forms import MyUserCreationForm
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import (UsersSerializers, 
                          UserCreationSerializer, 
                          ArtistSerializers,
                          ArtistRegistrationSerializer, 
                          RegistrationSerializer)
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.conf import settings
from datetime import datetime, timedelta
from .utils import generate_jwt_token, generate_access_token, generate_tokens
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def api_home(request):
    print(request.GET)
    print(request.POST)
    return Response('Message: Welcome to api tutorials')

@api_view(['GET'])
def UserApi(request, pk=None, *args, **kwargs):
    if pk == None:
        obj = User.objects.all()
        data = UsersSerializers(obj, many=True).data
        # data['profile_picture'] = model.profile_picture.url if model.profile_picture else None
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
def testapi(request, *args, **kwargs):
    return Response(request.data)

@api_view(['POST'])
def login_api(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(email=email, password=password)

    if user is None:
        return Response({'error':'Invalid email or password'}, status=400)
    # refresh = RefreshToken.for_user(user)
    # access_token = generate_access_token(user)

    # return Response({'access_token': access_token})
    return Response(generate_tokens(user))


@api_view(['POST'])
def registration_api(request):
    serializer = RegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    
    # Generate access and refresh tokens
    # token_serializer = TokenObtainPairSerializer()
    # tokens = token_serializer.get_token(user)
    # access_token = str(tokens.access_token)
    # refresh_token = str(tokens)

    # Return the tokens
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