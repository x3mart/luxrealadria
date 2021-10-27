from django.contrib import admin
from images.models import PropertyImage
from django.utils.safestring import mark_safe
from properties.models import Category, Feature, Property, Purpose, Region, Status

# Register your models here.
class PropertyImageInline(admin.TabularInline):
    model = PropertyImage
    readonly_fields = ('get_photo',)
    fieldsets = ((None, {'fields':('get_photo','image',)}),)
    extra = 4

    def get_photo(self, obj):
        if obj.image:
            return mark_safe(f'<a href={obj.image.url} target="_blank"><img src="{obj.image.url}" width="45"></a>')
        else:
            return '-'
    
    get_photo.short_description = 'Миниатюра'

class PropertyAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'is_trend', 'region', 'purpose', 'category')
    list_editable = ('is_active', 'is_trend')
    readonly_fields = ('unique_id',)
    inlines = [
        PropertyImageInline,
    ]


class CPRSFAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_editable = ('is_active',)


admin.site.register(Category, CPRSFAdmin)
admin.site.register(Purpose, CPRSFAdmin)
admin.site.register(Region, CPRSFAdmin)
admin.site.register(Status, CPRSFAdmin)
admin.site.register(Feature, CPRSFAdmin)
admin.site.register(Property, PropertyAdmin)