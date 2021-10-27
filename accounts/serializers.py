from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from images.serializers import LogoSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['is_staff'] = user.is_staff
        token['full_name'] = user.full_name
        try:
            token['logo_title'] = user.logo.title
            token['logo_image'] = user.logo.image.url
            token['logo_subtitle'] = user.logo.subtitle
        except:
            token['logo'] = None
        return token