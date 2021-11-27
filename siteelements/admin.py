from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from properties.models import FilterData

from siteelements.models import FAQ, Error404Page, Feature, Homepage, LegalInfo, LoginPage, MenuItem, MobileMenu, PropertyPage, RegisterPage, SiteLogo, Contact, SubMenuItem, UsefullArticle
from modeltranslation.admin import TranslationTabularInline

# Register your models here.
class NoAddDeleteAdmin(TranslationAdmin):
    def has_delete_permission(self, request, obj=None):
        return False
    def has_add_permission(self, request, obj=None):
        return False


class SubMenuItemInline(TranslationTabularInline):
    model = SubMenuItem


class MenuItemAdmin(TranslationAdmin):
    inlines = [SubMenuItemInline,]


class FilterDataAdmin(TranslationAdmin):
    def has_delete_permission(self, request, obj=None):
        return False
    def has_add_permission(self, request, obj=None):
        return False


admin.site.register(FilterData, FilterDataAdmin)
admin.site.register(LegalInfo, NoAddDeleteAdmin)
admin.site.register(SiteLogo)
admin.site.register(MenuItem, MenuItemAdmin)
admin.site.register(Error404Page, NoAddDeleteAdmin)
admin.site.register(FAQ, NoAddDeleteAdmin)
admin.site.register(Contact, NoAddDeleteAdmin)
admin.site.register(Homepage, NoAddDeleteAdmin)
admin.site.register(UsefullArticle, NoAddDeleteAdmin)
admin.site.register(PropertyPage, NoAddDeleteAdmin)
admin.site.register(Feature, NoAddDeleteAdmin)
admin.site.register(MobileMenu)
# admin.site.register(LoginPage, NoAddDeleteAdmin)
# admin.site.register(RegisterPage, NoAddDeleteAdmin)