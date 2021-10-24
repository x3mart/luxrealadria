from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models.aggregates import Avg, Min, Max
from django.db.models import Count
from rest_framework.decorators import api_view
from properties.serializers import CategorySerializer
from .models import Category, Property

# Create your views here.
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
    price_range = qs.aggregate(max_price=Max('price'), min_price=Min('price'))
    return Response(price_range, status=200)
    
class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.annotate(properties_count=Count('properties'))
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        get_price_range(self.request)
        return super().get_queryset()

    