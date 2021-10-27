from rest_framework import serializers
from images.models import Logo, PropertyImage


class PropertyGallarySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields =  '__all__'

class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = '__all__'