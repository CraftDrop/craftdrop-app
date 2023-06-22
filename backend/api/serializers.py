from rest_framework import serializers
from myapp.models import (User, 
                          Artists, 
                          Address,
                          Artwork,
                          Order)
from rest_framework_simplejwt.tokens import RefreshToken



class ArtworkSerializer(serializers.ModelSerializer):
    art_file = serializers.FileField(allow_empty_file=False)
    class Meta:
        model = Artwork
        # fields = '__all__'
        fields = ['title', 
                  'description', 
                  'price', 
                  'medium', 
                  'height', 
                  'width', 
                  'depth', 
                  'art_file',
                  'artwork_id']
    def create(self, validated_data):
        artwork = self.Meta.model(**validated_data)
        artwork.save()
        return artwork

class ArtistSerializers(serializers.ModelSerializer):
    artworks = ArtworkSerializer(many=True)
    class Meta:
        model = Artists
        fields = '__all__'

        
class AddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            'country',
            'state',
            'city',
            'zipcode'
        ]


class UsersSerializers(serializers.ModelSerializer):
    # address = AddressSerializers()
    artist = ArtistSerializers()
    class Meta:
        model = User
        fields = [
            'user_id',
            'username',
            'full_name',
            'profile_picture',
            'artist'

        ]

class UserSerializers(serializers.ModelSerializer):
    address = AddressSerializers()
    artist = ArtistSerializers()
    class Meta:
        model = User
        fields = '__all__'

class UserCreationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = [
            'full_name',
            'email',
            'username',
            'password',
            'bio',
            'profile_picture'
        ]
    def create(self, valid_data):
        password = valid_data.pop('password')
        user = User(**valid_data)
        user.username = user.username.lower()
        user.set_password(password)
        user.save()
        return user


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    profile_picture = serializers.ImageField(allow_null=True, required=False)

    class Meta:
        model = User
        fields = ['email', 
                  'password', 
                  'full_name', 
                  'username', 
                  'bio',
                  'profile_picture']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user


class ArtistRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = ['user_id', 'location', 'style']

    def create(self, validated_data):
        artist = self.Meta.model(**validated_data)
        artist.save()
        return artist
    

class UserProfileSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(allow_null=True)
    class Meta:
        model = User
        fields = ['full_name', 'username', 'email', 'bio', 'profile_picture']

class ViewArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['order_id', 
                  'user_id', 
                  'artwork_id', 
                  'total_price', 
                  'date_ordered', 
                  'quantity',
                  'status']
        read_only_fields = ['order_id', 'user_id', 'total_price', 'date_ordered', 'status']
