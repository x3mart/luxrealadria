from rest_framework import serializers
from contacts.models import Messenger, Social
from legals.models import FAQItem, LegalInfoItem
from properties.serializers import CategorySerializer, PropertySerializer
from siteelements.models import FAQ, Contact, Error404Page, Homepage, LegalInfo, MenuItem, SubMenuItem, UsefullArticle


class FAQItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = FAQItem
        fields = '__all__'


class FAQSerializer(serializers.ModelSerializer):
    faq_items = FAQItemSerializer(read_only=True, many=True)
    class Meta:
        model = FAQ
        fields = ['title', 'subtitle', 'faq_items']


class LegaInfoItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = LegalInfoItem
        fields = '__all__'

class LegalIfoPageSerializer(serializers.ModelSerializer):
        
    legal_info_items = LegaInfoItemSerializer(read_only=True, many=True)
    class Meta:
        model = LegalInfo
        exclude = ('id',)

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


class UsefullArticlePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsefullArticle
        exclude = ('id',)


class PropertyPageSerializer(serializers.ModelSerializer):

    class Meta:
        model = UsefullArticle
        exclude = ('id',)


class LoginPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )


class RegisterPageSerializer(serializers.Serializer):
    wallpaper = serializers.ImageField(read_only=True, )

class Error404PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Error404Page
        exclude = ('id',)


class SubMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubMenuItem
        fields = ('title',)


class MenuItemSerializer(serializers.ModelSerializer):
    submenu_items = SubMenuItemSerializer(read_only=True, many=True)

    class Meta:
        model = MenuItem
        fields = ('title', 'submenu_items')

class HomePageSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    faq = FAQSerializer(read_only=True, many=False)
    trends = PropertySerializer(read_only=True, many=True)
    recently_added = PropertySerializer(read_only=True, many=True)
    contact = ContactPageSerializer(read_only=True, many=False)
    menu_items = MenuItemSerializer(read_only=True, many=True)

    class Meta:
        model = Homepage
        exclude = ('id',)
