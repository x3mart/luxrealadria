from rest_framework.response import Response
from rest_framework.decorators import api_view
from contacts.models import ContactItem
from legals.models import FAQItem, LegalInfoItem
from properties.models import Category, Property, Status
from properties.views import SomeData
from siteelements.models import FAQ, Homepage, LegalInfo
from siteelements.serializers import ContactPageSerializer, HomePageSerializer, LegalIfoPageSerializer
from django.db.models import Prefetch
from utils.filters import get_active_properties_with_prefetch, get_active_and_has_properties

# Create your views here.
@api_view(['GET',])
def get_home_page(request):
    try:
        home_page = Homepage.objects.first()
        home = SomeData()
        home.title = home_page.title
        home.subtitle = home_page.subtitle
        home.wallpaper = home_page.wallpaper
        home.categories = get_active_and_has_properties(Category)
        faq_items = FAQItem.objects.filter(is_active=True)
        prefetch_faq_items = Prefetch('faq_items', queryset=faq_items)
        properties = get_active_properties_with_prefetch()
        home.trends = properties.filter(is_trend=True)[:5]
        home.recently_added = properties.order_by('-created_at')[:5]
        home.faq = FAQ.objects.prefetch_related(prefetch_faq_items).first()
        return Response(HomePageSerializer(home, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по Домашней сранице, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_legal_info_page(request):
    try:
        legal_info_items = LegalInfoItem.objects.filter(is_active=True)
        prefetch_legal_info_items = Prefetch('legal_info_items', queryset=legal_info_items)
        legal_info = LegalInfo.objects.prefetch_related(prefetch_legal_info_items).first()
        return Response(LegalIfoPageSerializer(legal_info, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по Юридическому разделу, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_contacts_page(request):
    try:
        contact_items = ContactItem.objects.filter(is_active=True)
        prefetch_contact_items = Prefetch('contact_items', queryset=contact_items)
        contact = LegalInfo.objects.prefetch_related(prefetch_contact_items).first()
        return Response(ContactPageSerializer(contact, context={'request': request}).data)
    except:
        return Response('Нет необходимой информации по разделу Контакты, Admin должен создать раздел через панель администратора')