from rest_framework import serializers
from images.models import PropertyImage

from properties.models import Category, Property, Purpose, Region, Status


class CategorySerializer(serializers.ModelSerializer):
    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Category
        fields = '__all__'


class StatusSerializer(serializers.ModelSerializer):
    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Status
        fields = '__all__'


class PurposeSerializer(serializers.ModelSerializer):
    # properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Purpose
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    # properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Region
        fields = '__all__'


class DataForFilterSerializer(serializers.Serializer):
    category = CategorySerializer(read_only=True, many=True)
    region = RegionSerializer(read_only=True, many=True)
    status = StatusSerializer(read_only=True, many=True)
    purpose = PurposeSerializer(read_only=True, many=True)
    rooms = serializers.SerializerMethodField()
    closets = serializers.SerializerMethodField()

    def get_rooms(self, obj):
        return obj.rooms
    
    def get_closets(self, obj):
        return obj.closets


class PropertyGallarySerializer(serializers.ModelSerializer):
    model = PropertyImage
    fields = '__all__'

class PropertySerializer(serializers.ModelSerializer):
    property_gallary = PropertyGallarySerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True, many=False)
    purpose = PurposeSerializer(read_only=True, many=False)
    region = RegionSerializer(read_only=True, many=False)
    status = StatusSerializer(read_only=True, many=False)
    class Meta:
        model = Property
        fields = '__all__'