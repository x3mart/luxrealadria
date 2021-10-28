from django.db.models import fields
from rest_framework import serializers
from legals.models import FAQItem, LegalInfoItem

from properties.serializers import CategorySerializer, PropertySerializer
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


class LegaInfoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalInfoItem
        fields = '__all__'

class LegalIfoPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )
    legal_info_items = LegaInfoItemSerializer(read_only=True, many=True)


class ContactItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalInfoItem
        fields = '__all__'

class ContactPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )
    contact_items = ContactItemSerializer(read_only=True, many=True)


class HomePageSerializer(serializers.Serializer):
    title = serializers.CharField(read_only=True, )
    subtitle = serializers.CharField(read_only=True, )
    wallpaper = serializers.ImageField(read_only=True, )
    categories = CategorySerializer(read_only=True, many=True)
    faq = FAQSerializer(read_only=True, many=False)
    trends = PropertySerializer(read_only=True, many=True)
    recently_added = PropertySerializer(read_only=True, many=True)
    contacts = ContactItemSerializer(read_only=True, many=True)