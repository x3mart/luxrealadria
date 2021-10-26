from django.db.models import Count
from django.db.models import Q


def get_active_with_properties(model):
    return model.objects.filter(is_active=True).annotate(properties_count=Count('properties', filter=Q(properties__is_active=True))).filter(properties_count__gt=0)

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