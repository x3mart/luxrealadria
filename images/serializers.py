from rest_framework import serializers
from images.models import PropertyImage


class PropertyGallarySerializer(serializers.ModelSerializer):
    model = PropertyImage
    fields = '__all__'


class LogoSerializer(serializers.ModelSerializer):
    model = PropertyImage
    fields = '__all__'