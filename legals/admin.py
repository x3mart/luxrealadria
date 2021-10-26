from django.contrib import admin
from django.utils.text import Truncator
from .models import FAQItem, LegalInfoItem

# Register your models here.
class LegalInfoItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_editable = ('is_active',)

class FaqItemAdmin(admin.ModelAdmin):
    list_display = ('get_question', 'is_active')
    list_editable = ('is_active',)

    def get_question(self, obj):
        return Truncator(obj.question).chars(25)
    
    get_question.short_description = 'Вопрос'

admin.site.register(LegalInfoItem, LegalInfoItemAdmin)
admin.site.register(FAQItem, FaqItemAdmin)