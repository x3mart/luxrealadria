from django.contrib import admin

from properties.models import Category, Property, Purpose, Region, Status

# Register your models here.
admin.site.register(Category)
admin.site.register(Purpose)
admin.site.register(Region)
admin.site.register(Status)
admin.site.register(Property)