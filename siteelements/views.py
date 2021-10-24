from rest_framework.response import Response
from rest_framework import viewsets
from django.db.models import Count
from django.db.models import Q
from rest_framework.decorators import api_view
from properties.models import Category, Property
from properties.views import SomeData
from siteelements.models import FAQ, Homepage
from siteelements.serializers import HomePageSerializer

# Create your views here.
@api_view(['GET',])
def get_homepage(request):
    home_page = Homepage.objects.first()
    home = SomeData()
    home.title = home_page.title
    home.subtitle = home_page.subtitle
    home.wallpaper = home_page.wallpaper
    home.categories = Category.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True)))
    home.trends = Property.objects.filter(status_id=2).prefetch_related('property_gallary')
    home.recently_added = Property.objects.prefetch_related('property_gallary').order_by('-created_at')[:3]
    home.faq = FAQ.objects.prefetch_related('faq_items').first()
    return Response(HomePageSerializer(home).data)