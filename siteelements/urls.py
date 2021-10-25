from rest_framework.routers import DefaultRouter
from django.urls import path

from siteelements.views import get_home_page, get_legal_info_page, get_contacts_page

# router = DefaultRouter()
# router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = [
            path('homepage/', get_home_page, name='homepage'),
            path('legalinfo/', get_legal_info_page, name='legalinfo'),
            path('contacts/', get_contacts_page, name='contact'),
            ]
# urlpatterns += router.urls