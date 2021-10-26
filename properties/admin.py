from django.contrib import admin

from properties.models import Category, Property, Purpose, Region, Status

# Register your models here.
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'is_trend', 'region', 'purpose', 'category')
    list_editable = ('is_active', 'is_trend')


class CPRSAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_editable = ('is_active',)


admin.site.register(Category, CPRSAdmin)
admin.site.register(Purpose, CPRSAdmin)
admin.site.register(Region, CPRSAdmin)
admin.site.register(Status, CPRSAdmin)
admin.site.register(Property, PropertyAdmin)