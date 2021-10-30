from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class LegalsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'legals'
    verbose_name = _("FAQ и Юридическая информация")
    
