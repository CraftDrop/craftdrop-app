import jwt
from django.conf import settings
from datetime import datetime, timedelta
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

def generate_access_token(user):
    access_token = AccessToken.for_user(user)
    access_token['exp'] = datetime.utcnow() + timedelta(days=7)  # Token expiration time
    # access_token['user_id'] = str(user.user_id)
    return str(access_token)

def generate_jwt_token(user):
    payload = {
        'user_id': user.user_id,
        'email': user.email,
        'exp': datetime.utcnow() + timedelta(days=7)  # Token expiration time
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token

#main one to use
def generate_tokens(user):
    access_token = AccessToken.for_user(user)
    refresh_token = RefreshToken.for_user(user)

    # Set the token expiration time
    access_token.set_exp(lifetime=timedelta(minutes=15))
    refresh_token.set_exp(lifetime=timedelta(days=30))

    return {
        'access_token': str(access_token),
        'refresh_token': str(refresh_token),
    }