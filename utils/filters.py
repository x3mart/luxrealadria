from django.db.models import Count
from django.db.models import Q
from django.db.models import Prefetch
from properties.models import Property, Status


def get_active_and_has_properties(model):
    return model.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=(Q(properties__is_active=True) &  Q(properties__purpose__is_active=True ) & Q(properties__region__is_active=True) & Q(properties__category__is_active=True)))).filter(properties_count__gt=0)

def get_filtered_data(model, request):
    qs = model.objects.only('price')
    if request.query_params.get('category'):
        qs = qs.filter(category_id=request.query_params.get('category'))
    if request.query_params.get('purpose'):
        qs = qs.filter(purpose_id=request.query_params.get('purpose'))
    if request.query_params.get('statuses'):
        qs = qs.filter(statuses_in=request.query_params.get('statuses'))
    if request.query_params.get('region'):
        qs = qs.filter(region_id=request.query_params.get('region'))
    if request.query_params.get('rooms'):
        qs = qs.filter(rooms=request.query_params.get('rooms'))
    if request.query_params.get('closets'):
        qs = qs.filter(closets=request.query_params.get('closets'))
    return qs

def get_active_properties_with_prefetch():
    statuses = Status.objects.filter(is_active=True)
    prefetch_statuses = Prefetch('statuses', queryset=statuses)
    return Property.objects.filter(is_active=True).filter(category__is_active=True).filter(purpose__is_active=True).filter(region__is_active=True).prefetch_related('property_gallary').prefetch_related('category').prefetch_related(prefetch_statuses).prefetch_related('region').prefetch_related('purpose')