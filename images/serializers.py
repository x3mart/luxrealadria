from rest_framework import serializers
from utils.translate import get_translatable_fields_source
from images.models import Logo, PropertyImage


class PropertyGallarySerializer(serializers.ModelSerializer):
    tmb_image = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = PropertyImage
        fields =  '__all__'
    
    def get_tmb_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.tmb_image) 
        return None 

class LogoSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)
    class Meta:
        model = Logo
        fields = '__all__'