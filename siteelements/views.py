from rest_framework.response import Response
from rest_framework.decorators import api_view
from modeltranslation.utils import get_language
from contacts.models import Messenger, Social
from legals.models import FAQItem, LegalInfoItem
from properties.models import Category, Property, Status
from properties.views import SomeData
from siteelements.models import FAQ, Contact, Error404Page, Feature, Homepage, LegalInfo, LoginPage, MenuItem, MobileMenu, PropertyPage, RegisterPage, UsefullArticle
from siteelements.serializers import ContactPageSerializer, Error404PageSerializer, HomePageSerializer, LegalIfoPageSerializer, LoginPageSerializer, PropertyPageSerializer, RegisterPageSerializer, UsefullArticlePageSerializer
from django.db.models import Prefetch
from utils.filters import get_active_properties_with_prefetch, get_active_and_has_properties

# Create your views here.
@api_view(['GET',])
def get_home_page(request):
    # try:
    home = Homepage.objects.first()
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
    try:
        home.menu_items = MenuItem.objects.prefetch_related('submenu_items')
    except:
        home.menu_items = None
    try:
        home.mobile_menu = MobileMenu.objects.first()
    except:
        home.mobile_menu = None
    home.more_button = PropertyPage.objects.first().more_button
    return Response(HomePageSerializer(home, context={'request': request, "language": get_language()}).data)
    # except:
    #     return Response('?????? ?????????????????????? ???????????????????? ???? ???????????????? ??????????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')

@api_view(['GET',])
def get_legal_info_page(request):
    try:
        legal_info = LegalInfo.objects.first()
        legal_info.legal_info_items = LegalInfoItem.objects.filter(is_active=True)
        return Response(LegalIfoPageSerializer(legal_info, context={'request': request, "language": get_language()}).data)
    except:
        return Response('?????? ?????????????????????? ???????????????????? ???? ???????????????????????? ??????????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')

@api_view(['GET',])
def get_contacts_page(request):
    # try:
    contact = Contact.objects.first()
    contact.socials = Social.objects.filter(is_active=True)
    contact.messengers = Messenger.objects.filter(is_active=True)
    return Response(ContactPageSerializer(contact).data)
    # except:
    #     return Response('?????? ?????????????????????? ???????????????????? ???? ?????????????? ????????????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')


@api_view(['GET',])
def get_usefull_articles_page(request):
    try:
        useful_article = UsefullArticle.objects.first()
        useful_article.more_button = PropertyPage.objects.first().more_button
        return Response(UsefullArticlePageSerializer(useful_article).data)
    except:
        return Response('?????? ?????????????????????? ???????????????????? ???? ??????????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')


@api_view(['GET',])
def get_properties_page(request):
    # try:
    properties_page = PropertyPage.objects.first()
    properties_page.feature_titles = Feature.objects.first()
    return Response(PropertyPageSerializer(properties_page).data)
    # except:
    #     return Response('?????? ?????????????????????? ???????????????????? ???? ???????????????? ????????????????????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')

@api_view(['GET',])
def get_login_page(request):
    try:
        login_page = LoginPage.objects.first()
        return Response(LoginPageSerializer(login_page, context={'request': request, "language": get_language()}).data)
    except:
        return Response('?????? ?????????????????????? ???????????????????? ???? ???????????????? ??????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')


@api_view(['GET',])
def get_register_page(request):
    try:
        register_page = RegisterPage.objects.first()
        return Response(RegisterPageSerializer(register_page, context={'request': request, "language": get_language()}).data)
    except:
        return Response('?????? ?????????????????????? ???????????????????? ???? ???????????????? ??????????????????????, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')

@api_view(['GET',])
def get_error404_page(request):
    try:
        error404 = Error404Page.objects.first()
        return Response(Error404PageSerializer(error404, context={'request': request, "language": get_language()}).data)
    except:
        return Response('?????? ?????????????????????? ???????????????????? ???? ???????????????? 404, Admin ???????????? ?????????????? ???????????? ?????????? ???????????? ????????????????????????????')