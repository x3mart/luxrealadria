from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.fields import RichTextUploadingField


# Create your models here.
class ContactItem(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    body = RichTextUploadingField(_('Текст'))
    icon = models.CharField(_('Иконка'), max_length=255,)
    contact = models.ForeignKey('siteelements.Contact', on_delete=models.CASCADE, related_name='contact_items', verbose_name=_('раздел контакт'))
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Элемент контактов')
        verbose_name_plural = _('Элементы контактов')

    def __str__(self):
        return self.title 