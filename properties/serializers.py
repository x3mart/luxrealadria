from rest_framework import serializers
from utils.translate import get_translatable_fields_source
from images.serializers import PropertyGallarySerializer
from properties.models import Category, Feature, Property, Purpose, Region, Status


class CategorySerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Category
        fields = '__all__'


class StatusSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Status
        fields = '__all__'


class PurposeSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Purpose
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Region
        fields = '__all__'


class FeatureSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Feature
        fields = '__all__'


class DataForFilterSerializer(serializers.Serializer):
    max_price = serializers.IntegerField(read_only=True, source='price_range.max_price')
    min_price = serializers.IntegerField(read_only=True, source='price_range.min_price')
    categories = CategorySerializer(read_only=True, many=True)
    regions = RegionSerializer(read_only=True, many=True)
    statuses = StatusSerializer(read_only=True, many=True)
    purposes = PurposeSerializer(read_only=True, many=True)
    rooms = serializers.SerializerMethodField()
    closets = serializers.SerializerMethodField()

    def get_rooms(self, obj):
        return obj.rooms
    
    def get_closets(self, obj):
        return obj.closets


class PropertySerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)
    
    property_gallary = PropertyGallarySerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True, many=False)
    purpose = PurposeSerializer(read_only=True, many=False)
    region = RegionSerializer(read_only=True, many=False)
    statuses = StatusSerializer(read_only=True, many=True)
    features = FeatureSerializer(read_only=True, many=True)
    tmb_wallpaper = serializers.SerializerMethodField(read_only=True)
    short_description = serializers.CharField(read_only=True)
    class Meta:
        model = Property
        fields = '__all__'

    def get_tmb_wallpaper(self, obj):
        if obj.wallpaper:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.tmb_wallpaper) 
        return None
    
    # def get_short_description(self, obj):
    #     if obj.description:
    #         return obj.short_description 
    #     return None