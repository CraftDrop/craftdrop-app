from rest_framework import serializers
from myapp.models import User, Artists, Address
from rest_framework_simplejwt.tokens import RefreshToken


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
    address = AddressSerializers()
    class Meta:
        model = User
        fields = [
            'user_id',
            'username',
            'full_name',
            'email',
            'profile_picture',
            'address'

        ]

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

class ArtistSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = '__all__'


# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True)
#     user = User
#     def validate(self, data):
#         email = data.get('email')
#         password = data.get('password')

#         if email and password:
#             user = User.objects.filter(email=email).first()

#             if user and user.check_password(password):
#                 return user

#         raise serializers.ValidationError('Invalid email or password.')


# serializers.py


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('email', 'password', 'full_name', 'username', 'bio')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user


class ArtistRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = ('user_id', 'location', 'style')

    def create(self, validated_data):
        artist = self.Meta.model(**validated_data)
        artist.save()
        return artist