from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models.aggregates import Avg, Min, Max
from django.db.models import Count
from django.db.models import Q
from rest_framework.decorators import api_view
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
    qs = Property.objects.only('price')
    if request.query_params.get('category'):
        qs = qs.filter(category_id=request.query_params.get('category'))
    if request.query_params.get('purpose'):
        qs = qs.filter(purpose_id=request.query_params.get('purpose'))
    if request.query_params.get('status'):
        qs = qs.filter(status_id=request.query_params.get('status'))
    if request.query_params.get('region'):
        qs = qs.filter(region_id=request.query_params.get('region'))
    if request.query_params.get('rooms'):
        qs = qs.filter(rooms=request.query_params.get('rooms'))
    if request.query_params.get('closets'):
        qs = qs.filter(closets=request.query_params.get('closets'))
    price_range = qs.aggregate(max_price=Max('price'), min_price=Min('price'))
    return Response(price_range, status=200)


@api_view(['GET',])
def get_data_for_filter(request):
    filter_data = SomeData()
    filter_data.rooms = Property.objects.filter(is_active=True).distinct().order_by('rooms').values_list('rooms', flat=True)
    filter_data.closets = Property.objects.filter(is_active=True).distinct().order_by('closets').values_list('closets', flat=True)
    filter_data.category = Category.objects.filter(is_active=True)
    filter_data.region = Region.objects.filter(is_active=True)
    filter_data.status = Status.objects.filter(is_active=True)
    filter_data.purpose = Purpose.objects.filter(is_active=True)
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
    queryset = Category.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True)))
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class StatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Status.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True)))
    serializer_class = StatusSerializer
    permission_classes = [AllowAny]


class PurposeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Status.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True)))
    serializer_class = PurposeSerializer
    permission_classes = [AllowAny]  


class RegionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Status.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True)))
    serializer_class = RegionSerializer
    permission_classes = [AllowAny]


class PropertyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Property.objects.filter(is_active=True).prefetch_related('property_gallary').prefetch_related('category').prefetch_related('status').prefetch_related('region').prefetch_related('purpose')
    serializer_class = PropertySerializer
    permission_classes = [AllowAny]
    filter_backend = [DjangoFilterBackend]
    filterset_class = PropertyFilter
    pagination_class = PropertyPagination
