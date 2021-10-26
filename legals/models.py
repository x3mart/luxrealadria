from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.text import Truncator


# Create your models here.
class LegalInfoItem(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    body = RichTextUploadingField(_('Текст'))
    legal_info = models.ForeignKey('siteelements.LegalInfo', on_delete=models.CASCADE, related_name='legal_info_items', verbose_name=_('Юр инфа'))
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Элемент юр инфы')
        verbose_name_plural = _('Элементы юр инфы')

    def __str__(self):
        return self.title 

class FAQItem(models.Model):
    question = RichTextUploadingField(_('Вопрос'))
    answer = RichTextUploadingField(_('Ответ'))
    faq = models.ForeignKey('siteelements.FAQ', on_delete=models.CASCADE, related_name='faq_items', verbose_name=_('FAQ'))
    is_active = models.BooleanField(default=True)
    

    class Meta:
        verbose_name = _('Элемент FAQ')
        verbose_name_plural = _('Элементы FAQ')
        
    def __str__(self):
        return Truncator(self.question).chars(25)


