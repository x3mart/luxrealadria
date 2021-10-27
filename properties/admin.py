from django.contrib import admin

from properties.models import Category, Feature, Property, Purpose, Region, Status

# Register your models here.
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'is_trend', 'region', 'purpose', 'category')
    list_editable = ('is_active', 'is_trend')


class CPRSFAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_editable = ('is_active',)


admin.site.register(Category, CPRSFAdmin)
admin.site.register(Purpose, CPRSFAdmin)
admin.site.register(Region, CPRSFAdmin)
admin.site.register(Status, CPRSFAdmin)
admin.site.register(Feature, CPRSFAdmin)
admin.site.register(Property, PropertyAdmin)