from rest_framework.routers import DefaultRouter
from django.urls import path

from siteelements.views import get_error404_page, get_home_page, get_legal_info_page, get_contacts_page, get_usefull_articles_page, get_properties_page, get_login_page, get_register_page

# router = DefaultRouter()
# router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = [
            path('homepage/', get_home_page, name='homepage'),
            path('legalinfo/', get_legal_info_page, name='legalinfo'),
            path('contacts/', get_contacts_page, name='contact'),
            path('usefullarticles/', get_usefull_articles_page, name='usefullarticle'),
            path('propertypage/', get_properties_page, name='propertypage'),
            path('loginpage/', get_login_page, name='loginpage'),
            path('registerpage/', get_register_page, name='registerpage'),
            path('error404/', get_error404_page, name='error404'),
            ]
# urlpatterns += router.urls