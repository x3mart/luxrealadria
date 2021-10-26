from rest_framework.response import Response
from rest_framework import viewsets
from django.db.models import Count
from django.db.models import Q
from rest_framework.decorators import api_view
from contacts.models import ContactItem
from legals.models import FAQItem, LegalInfoItem
from properties.models import Category, Property, Status
from properties.views import SomeData
from siteelements.models import FAQ, Homepage, LegalInfo
from siteelements.serializers import ContactPageSerializer, HomePageSerializer, LegalIfoPageSerializer
from django.db.models import Prefetch

# Create your views here.
@api_view(['GET',])
def get_home_page(request):
    home_page = Homepage.objects.first()
    home = SomeData()
    home.title = home_page.title
    home.subtitle = home_page.subtitle
    home.wallpaper = home_page.wallpaper
    home.categories = Category.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True)))
    faq_items = FAQItem.objects.filter(is_active=True)
    prefetch_faq_items = Prefetch('faq_items', queryset=faq_items)
    statuses = Status.objects.filter(is_active=True)
    prefetch_statuses = Prefetch('statuses', queryset=statuses)
    home.trends = Property.objects.filter(is_trend=True).filter(is_active=True).prefetch_related('property_gallary').prefetch_related('category').prefetch_related(prefetch_statuses).prefetch_related('region').prefetch_related('purpose')[:5]
    home.recently_added = Property.objects.filter(is_active=True).prefetch_related('property_gallary').prefetch_related('category').prefetch_related(prefetch_statuses).prefetch_related('region').prefetch_related('purpose').order_by('-created_at')[:5]
    home.faq = FAQ.objects.prefetch_related(prefetch_faq_items).first()
    return Response(HomePageSerializer(home).data)

@api_view(['GET',])
def get_legal_info_page(request):
    try:
        legal_info_items = LegalInfoItem.objects.filter(is_active=True)
        prefetch_legal_info_items = Prefetch('legal_info_items', queryset=legal_info_items)
        legal_info = LegalInfo.objects.prefetch_related(prefetch_legal_info_items).first()
        Response(LegalIfoPageSerializer(legal_info).data)
    except:
        return Response('Нет необходимой информации по Юридическому разделу, Admin должен создать раздел через панель администратора')

@api_view(['GET',])
def get_contacts_page(request):
    try:
        contact_items = ContactItem.objects.filter(is_active=True)
        prefetch_contact_items = Prefetch('contact_items', queryset=contact_items)
        contact = LegalInfo.objects.prefetch_related(prefetch_contact_items).first()
        Response(ContactPageSerializer(contact).data)
    except:
        return Response('Нет необходимой информации по разделу Контакты, Admin должен создать раздел через панель администратора')