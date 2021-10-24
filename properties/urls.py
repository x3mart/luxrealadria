from .views import CategoryViewSet, get_price_range
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = [path('priceranges/', get_price_range, name='pricerange'),]
urlpatterns += router.urls
