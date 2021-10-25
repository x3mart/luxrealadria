from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _



class SiteelementsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'siteelements'
    verbose_name = _("Элементы сайта")

    def ready(self):
        import siteelements.signals
