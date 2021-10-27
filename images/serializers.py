from rest_framework import serializers
from images.models import Logo, PropertyImage


class PropertyGallarySerializer(serializers.ModelSerializer):
    tmb_image = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = PropertyImage
        fields =  '__all__'
    
    def get_tmb_image(self, obj):
        if obj.tmb_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.tmb_image) 
        return None 

class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = '__all__'