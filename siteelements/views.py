from rest_framework.response import Response
from rest_framework.decorators import api_view
from contacts.models import Messenger, Social
from legals.models import FAQItem, LegalInfoItem
from properties.models import Category, Property, Status
from properties.views import SomeData
from siteelements.models import FAQ, Contact, Error404Page, Homepage, LegalInfo, LoginPage, PropertyPage, RegisterPage, UsefullArticle
from siteelements.serializers import ContactPageSerializer, Error404PageSerializer, HomePageSerializer, LegalIfoPageSerializer, LoginPageSerializer, PropertyPageSerializer, RegisterPageSerializer, UsefullArticlePageSerializer
from django.db.models import Prefetch
from utils.filters import get_active_properties_with_prefetch, get_active_and_has_properties

# Create your views here.
@api_view(['GET',])
def get_home_page(request):
    # try:
    home_page = Homepage.objects.first()
    home = SomeData()
    home.title = home_page.title
    home.footer_text = home_page.footer_text
    home.subtitle = home_page.subtitle
    home.wallpaper = home_page.wallpaper
    home.categories = get_active_and_has_properties(Category)
    properties = get_active_properties_with_prefetch()
    home.trends = properties.filter(is_trend=True)[:5]
    home.recently_added = properties.order_by('-created_at')[:5]
    try:
        home.faq = FAQ.objects.first()
        home.faq.faq_items = FAQItem.objects.filter(is_active=True)
    except:
        home.faq = None
    try:
        home.contact = Contact.objects.first()
        home.contact.socials = Social.objects.filter(is_active=True)
        home.contact.messengers = Messenger.objects.filter(is_active=True)
    except:
        home.contact = None
    return Response(HomePageSerializer(home, context={'request': request}).data)
    # except:
    #     return Response('Нет необходимой информации по Домашней сранице, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_legal_info_page(request):
    try:
        legal_info = LegalInfo.objects.first()
        legal_info.legal_info_items = LegalInfoItem.objects.filter(is_active=True)
        return Response(LegalIfoPageSerializer(legal_info, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по Юридическому разделу, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_contacts_page(request):
    try:
        contact = Contact.objects.first()
        contact.socials = Social.objects.filter(is_active=True)
        contact.messengers = Messenger.objects.filter(is_active=True)
        return Response(ContactPageSerializer(contact, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по разделу Контакты, Admin должен создать раздел через панель администратора')


@api_view(['GET',])
def get_usefull_articles_page(request):
    try:
        useful_article = UsefullArticle.objects.first()
        return Response(UsefullArticlePageSerializer(useful_article, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по Юридическому разделу, Admin должен создать раздел через панель администратора')


@api_view(['GET',])
def get_properties_page(request):
    try:
        properties_page = PropertyPage.objects.first()
        return Response(PropertyPageSerializer(properties_page, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по странице Недвижимости, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_login_page(request):
    try:
        login_page = LoginPage.objects.first()
        return Response(LoginPageSerializer(login_page, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по странице Входа, Admin должен создать раздел через панель администратора')


@api_view(['GET',])
def get_register_page(request):
    try:
        register_page = RegisterPage.objects.first()
        return Response(RegisterPageSerializer(register_page, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по странице Регистрации, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_error404_page(request):
    try:
        error404 = Error404Page.objects.first()
        return Response(Error404PageSerializer(error404, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по странице 404, Admin должен создать раздел через панель администратора')