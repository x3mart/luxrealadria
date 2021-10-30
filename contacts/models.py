from django.db import models
from django.utils.translation import gettext_lazy as _


# Create your models here.
class Social(models.Model):
    title = models.CharField(_('Название'), max_length=25,)
    link = models.CharField(_('Ссылка'), max_length=255,)
    icon = models.CharField(_('Иконка'), max_length=255,)
    # contact = models.ForeignKey('siteelements.Contact', on_delete=models.CASCADE, related_name='contact_items', verbose_name=_('раздел контакт'))
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Социальная сеть')
        verbose_name_plural = _('Социальнае сети')

    def __str__(self):
        return self.title 


class Messenger(models.Model):
    title = models.CharField(_('Название'), max_length=25,)
    link = models.CharField(_('Ссылка'), max_length=255,)
    icon = models.CharField(_('Иконка'), max_length=255,)
    # contact = models.ForeignKey('siteelements.Contact', on_delete=models.CASCADE, related_name='contact_items', verbose_name=_('раздел контакт'))
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Мессенджер')
        verbose_name_plural = _('Мессенджеры')

    def __str__(self):
        return self.title 