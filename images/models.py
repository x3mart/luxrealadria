from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import slugify
from unidecode import unidecode
import os
# Create your models here.

def logo_path(instance, filename):
    name, extension = os.path.splitext(filename)
    return 'logos/{0}/{1}{2}'.format(slugify(unidecode(instance.title)), slugify(unidecode(name)), '.jpg')

def property_image_path(instance, filename):
    name, extension = os.path.splitext(filename)
    return 'property/gallaries/{0}/{1}{2}'.format(slugify(unidecode(instance.property.name)), slugify(unidecode(name)), '.jpg')

class Logo(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    sub_title = models.CharField(_('Подзаголовок'), max_length=255,  null=True, blank=True,)
    image = models.ImageField(_('Изображение'), max_length=255, upload_to=logo_path, null=True, blank=True,)

    class Meta:
        verbose_name = _('Логотип')
        verbose_name_plural = _('Логотипы')
        ordering = ['-id']


    def __str__(self):
        return self.title

class PropertyImage(models.Model):
    image = models.ImageField(_('Изображение'), max_length=255, upload_to=property_image_path)
    property = models.ForeignKey('properties.Property', on_delete=models.CASCADE, related_name='property_gallary', verbose_name=_('Недвижимость'))

    class Meta:
        verbose_name = _('Изображение недвижимости')
        verbose_name_plural = _('Галерея недвижимости')
        ordering = ['-id']