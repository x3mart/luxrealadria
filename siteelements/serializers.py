from django.db.models import fields
from rest_framework import serializers
from legals.models import FAQItem

from properties.serializers import CategorySerializer
from siteelements.models import FAQ


class FAQItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQItem
        fields = '__all__'


class FAQSerializer(serializers.ModelSerializer):
    faq_items = FAQItemSerializer(read_only=True, many=True)
    class Meta:
        model = FAQ
        fields = '__all__'


class HomePageSerializer(serializers.Serializer):
    title = serializers.CharField(read_only=True, )
    subtitle = serializers.CharField(read_only=True, )
    wallpaper = serializers.ImageField(read_only=True, )
    categories = CategorySerializer(read_only=True, many=True)
    faq = FAQSerializer(read_only=True, many=True)
    # trends
    # recently_added
