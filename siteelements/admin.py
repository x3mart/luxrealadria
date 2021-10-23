from django.contrib import admin

from siteelements.models import FAQ, LegalInfo, SiteLogo, Contact

# Register your models here.
admin.site.register(LegalInfo)
admin.site.register(SiteLogo)
admin.site.register(FAQ)
admin.site.register(Contact)