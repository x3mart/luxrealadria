from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Logo, PropertyImage

# Register your models here.
class PropertyImageAdmin(admin.ModelAdmin):
    model = PropertyImage
    list_display = ('get_photo', 'get_property_name')
    list_display_links = ('get_photo',)

    def get_photo(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.tmb_image}" width="55">')
        else:
            return '-'
    
    def get_property_name(self, obj):
        if obj.image_property:
            return obj.image_property.name
        else:
            return '-'
    
    get_photo.short_description = 'Миниатюра'
    get_property_name.short_description = 'Недвижимость'


admin.site.register(PropertyImage, PropertyImageAdmin)
admin.site.register(Logo)

