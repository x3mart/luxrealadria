from django.contrib import admin

from siteelements.models import FAQ, Homepage, LegalInfo, SiteLogo, Contact, UsefullArticle

# Register your models here.
admin.site.register(LegalInfo)
admin.site.register(SiteLogo)
admin.site.register(FAQ)
admin.site.register(Contact)
admin.site.register(Homepage)
admin.site.register(UsefullArticle)