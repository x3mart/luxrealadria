from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from siteelements.models import FAQ, Error404Page, Homepage, LegalInfo, LoginPage, PropertyPage, RegisterPage, SiteLogo, Contact, UsefullArticle

# Register your models here.
class NoAddDeleteAdmin(TranslationAdmin):
    def has_delete_permission(self, request, obj=None):
        return False
    def has_add_permission(self, request, obj=None):
        return False


admin.site.register(LegalInfo, NoAddDeleteAdmin)
admin.site.register(SiteLogo)
admin.site.register(Error404Page, NoAddDeleteAdmin)
admin.site.register(FAQ, NoAddDeleteAdmin)
admin.site.register(Contact, NoAddDeleteAdmin)
admin.site.register(Homepage, NoAddDeleteAdmin)
admin.site.register(UsefullArticle, NoAddDeleteAdmin)
admin.site.register(PropertyPage, NoAddDeleteAdmin)
# admin.site.register(LoginPage, NoAddDeleteAdmin)
# admin.site.register(RegisterPage, NoAddDeleteAdmin)