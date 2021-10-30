from django_filters import rest_framework as filters

from properties.models import Property


class PropertyFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Property
        fields = ['category', 'statuses', 'purpose', 'region', 'rooms', 'closets',]
