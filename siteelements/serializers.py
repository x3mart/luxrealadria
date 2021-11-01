from django.db.models import fields
from rest_framework import serializers
from contacts.models import Messenger, Social
from legals.models import FAQItem, LegalInfoItem
from properties.serializers import CategorySerializer, PropertySerializer
from siteelements.models import FAQ, Contact, Error404Page


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


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = '__all__'


class MessengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messenger
        fields = '__all__'

class ContactPageSerializer(serializers.ModelSerializer):
    socials = SocialSerializer(read_only=True, many=True)
    messengers = MessengerSerializer(read_only=True, many=True)

    class Meta:
        model = Contact
        exclude = ('id',)


class UsefullArticlePageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )


class PropertyPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )


class LoginPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )


class RegisterPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )

class Error404PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Error404Page
        exclude = ('id',)


class HomePageSerializer(serializers.Serializer):
    title = serializers.CharField(read_only=True, )
    subtitle = serializers.CharField(read_only=True, )
    footer_text = serializers.CharField(read_only=True, )
    wallpaper = serializers.ImageField(read_only=True, )
    categories = CategorySerializer(read_only=True, many=True)
    faq = FAQSerializer(read_only=True, many=False)
    trends = PropertySerializer(read_only=True, many=True)
    recently_added = PropertySerializer(read_only=True, many=True)
    contact = ContactPageSerializer(read_only=True, many=False)