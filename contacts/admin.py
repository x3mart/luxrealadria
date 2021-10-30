from django.contrib import admin

from contacts.models import  Messenger, Social

# Register your models here.
admin.site.register(Social)
admin.site.register(Messenger)