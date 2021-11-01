from django_filters import rest_framework as filters

from properties.models import Property


class PropertyFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Property
        fields = ['category__title', 'statuses__title', 'purpose__title', 'region__title', 'rooms', 'closets',]
