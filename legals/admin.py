from django.contrib import admin

from .models import FAQItem, LegalInfoItem

# Register your models here.
admin.site.register(LegalInfoItem)
admin.site.register(FAQItem)