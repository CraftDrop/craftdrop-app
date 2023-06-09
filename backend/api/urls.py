from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('', views.api_home),
    path('users/', views.UsersApi),
    path('user/', views.UserApi),
    path('artist/', views.ArtistApi),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', views.login_api),
    path('logout/', views.logout_api),
    path('register/', views.registration_api),
    path('create_artist/', views.artist_registration_api),
    path('list_artwork/', views.artwork_listing_api)
    # path('login/', views.loginApi),

]

