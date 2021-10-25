from .views import CategoryViewSet, PropertyViewSet, get_closets, get_data_for_filter, get_price_range, PurposeViewSet, StatusViewSet, RegionViewSet, get_rooms
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'purposes', PurposeViewSet, basename='purpose')
router.register(r'statuses', StatusViewSet, basename='status')
router.register(r'regions', RegionViewSet, basename='region')
router.register(r'properties', PropertyViewSet, basename='region')

urlpatterns = [
            path('priceranges/', get_price_range, name='pricerange'),
            path('rooms/', get_rooms, name='room'),
            path('closets/', get_closets, name='closet'),
            path('dataforfilters/', get_data_for_filter, name='dataforfilter'),
            ]
urlpatterns += router.urls
