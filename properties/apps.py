from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _



class PropertiesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'properties'
    verbose_name = _("Недвижимость")


    def ready(self):
        import properties.signals