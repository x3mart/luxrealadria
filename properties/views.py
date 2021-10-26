from django.db.models.query import Prefetch
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models.aggregates import Avg, Min, Max
from django.db.models import Count
from django.db.models import Q
from rest_framework.decorators import api_view
from utils.filters import get_active_and_has_properties, get_filtered_data
from properties.filters import PropertyFilter
from properties.paginations import PropertyPagination
from properties.serializers import CategorySerializer, DataForFilterSerializer, PropertySerializer, PurposeSerializer, RegionSerializer, StatusSerializer
from .models import Category, Property, Purpose, Region, Status

# Create your views here.

class SomeData:
    def __init__(self):
        pass


@api_view(['GET',])
def get_price_range(request):
    qs = get_filtered_data(Property, request)
    price_range = qs.aggregate(max_price=Max('price'), min_price=Min('price'))
    return Response(price_range, status=200)


@api_view(['GET',])
def get_data_for_filter(request):
    filter_data = SomeData()
    filter_data.rooms = Property.objects.filter(is_active=True).distinct().order_by('rooms').values_list('rooms', flat=True)
    filter_data.closets = Property.objects.filter(is_active=True).distinct().order_by('closets').values_list('closets', flat=True)
    filter_data.categories = get_active_and_has_properties(Category)
    filter_data.statuses = get_active_and_has_properties(Status)
    filter_data.regions = get_active_and_has_properties(Region)
    filter_data.purposes = get_active_and_has_properties(Purpose)
    return Response(DataForFilterSerializer(filter_data).data)


@api_view(['GET',])
def get_rooms(request):
    qs = Property.objects.filter(is_active=True).distinct().order_by('rooms')
    rooms = qs.values_list('rooms', flat=True)
    return Response(rooms, status=200)


@api_view(['GET',])
def get_closets(request):
    qs = Property.objects.filter(is_active=True).distinct().order_by('closets')
    closets = qs.values_list('closets', flat=True)
    return Response(closets, status=200)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = get_active_and_has_properties(Category)
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class StatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = get_active_and_has_properties(Status)
    serializer_class = StatusSerializer
    permission_classes = [AllowAny]


class PurposeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = get_active_and_has_properties(Purpose)
    serializer_class = PurposeSerializer
    permission_classes = [AllowAny]  


class RegionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = get_active_and_has_properties(Region)
    serializer_class = RegionSerializer
    permission_classes = [AllowAny]


class PropertyViewSet(viewsets.ReadOnlyModelViewSet):
    statuses = Status.objects.filter(is_active=True)
    prefetch_statuses = Prefetch('statuses', queryset=statuses)
    queryset = Property.objects.filter(is_active=True).filter(category__is_active=True).filter(purpose__is_active=True).filter(region__is_active=True).prefetch_related('property_gallary').prefetch_related('category').prefetch_related(prefetch_statuses).prefetch_related('region').prefetch_related('purpose')
    serializer_class = PropertySerializer
    permission_classes = [AllowAny]
    filter_backend = [DjangoFilterBackend]
    filterset_class = PropertyFilter
    pagination_class = PropertyPagination
