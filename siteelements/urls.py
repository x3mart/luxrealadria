from rest_framework.routers import DefaultRouter
from django.urls import path

from siteelements.views import get_homepage

# router = DefaultRouter()
# router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = [
            path('homepage/', get_homepage, name='homepage'),
            ]
# urlpatterns += router.urls