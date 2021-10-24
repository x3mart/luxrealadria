from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models.aggregates import Avg
from django.db.models import Count

from properties.serializers import CategorySerializer
from .models import Category

# Create your views here.
class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.annotate(properties_count=Count('properties'))
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

    