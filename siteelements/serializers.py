from django.db.models import fields
from rest_framework import serializers
from utils.translate import get_translatable_fields_source
from contacts.models import Messenger, Social
from legals.models import FAQItem, LegalInfoItem
from properties.serializers import CategorySerializer, PropertySerializer
from siteelements.models import FAQ, Contact, Error404Page, Homepage, LegalInfo, UsefullArticle


class FAQItemSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(FAQItemSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)
    class Meta:
        model = FAQItem
        fields = '__all__'


class FAQSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(FAQSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)
    faq_items = FAQItemSerializer(read_only=True, many=True)
    class Meta:
        model = FAQ
        fields = ['title', 'subtitle', 'faq_items']


class LegaInfoItemSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(LegaInfoItemSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)
    class Meta:
        model = LegalInfoItem
        fields = '__all__'

class LegalIfoPageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(LegalIfoPageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)
        
    legal_info_items = LegaInfoItemSerializer(read_only=True, many=True)
    class Meta:
        model = LegalInfo
        exclude = ('id',)

class SocialSerializer(serializers.ModelSerializer):
    # def __init__(self, *args, **kwargs):
    #     super(SocialSerializer, self).__init__(*args, **kwargs)
    #     self.fields = get_translatable_fields_source(self)

    class Meta:
        model = Social
        fields = '__all__'


class MessengerSerializer(serializers.ModelSerializer):
    # def __init__(self, *args, **kwargs):
    #     super(MessengerSerializer, self).__init__(*args, **kwargs)
    #     self.fields = get_translatable_fields_source(self)

    class Meta:
        model = Messenger
        fields = '__all__'

class ContactPageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(ContactPageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    socials = SocialSerializer(read_only=True, many=True)
    messengers = MessengerSerializer(read_only=True, many=True)

    class Meta:
        model = Contact
        exclude = ('id',)


class UsefullArticlePageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(UsefullArticlePageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    class Meta:
        model = UsefullArticle
        exclude = ('id',)


class PropertyPageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(PropertyPageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    class Meta:
        model = UsefullArticle
        exclude = ('id',)


class LoginPageSerializer(serializers.Serializer):
    def __init__(self, *args, **kwargs):
        super(LoginPageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    wallpaper = serializers.ImageField(read_only=True, )


class RegisterPageSerializer(serializers.Serializer):
    def __init__(self, *args, **kwargs):
        super(RegisterPageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    wallpaper = serializers.ImageField(read_only=True, )

class Error404PageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(Error404PageSerializer, self).__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    class Meta:
        model = Error404Page
        exclude = ('id',)


class HomePageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    categories = CategorySerializer(read_only=True, many=True)
    faq = FAQSerializer(read_only=True, many=False)
    trends = PropertySerializer(read_only=True, many=True)
    recently_added = PropertySerializer(read_only=True, many=True)
    contact = ContactPageSerializer(read_only=True, many=False)

    class Meta:
        model = Homepage
        exclude = ('id',)
