from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Logo, PropertyImage

# Register your models here.
class PropertyImageAdmin(admin.ModelAdmin):
    model = PropertyImage
    list_display = ('get_photo', 'get_property_name')
    list_display_links = ('get_photo',)

    @admin.display(description='Миниатюра')
    def get_photo(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.tmb_image}" width="55">')
        else:
            return '-'
    
    @admin.display(description='Недвижимость')
    def get_property_name(self, obj):
        if obj.image_property:
            return obj.image_property.name
        else:
            return '-'


admin.site.register(PropertyImage, PropertyImageAdmin)
admin.site.register(Logo)

