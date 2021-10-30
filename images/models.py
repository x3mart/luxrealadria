from django.db import models
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import slugify
from unidecode import unidecode
import os
from utils.images import get_tmb_path
# Create your models here.

def logo_path(instance, filename):
    name, extension = os.path.splitext(filename)
    return 'logos/{0}/{1}{2}'.format(slugify(unidecode(instance.title)), slugify(unidecode(name)), '.jpg')

def property_image_path(instance, filename):
    name, extension = os.path.splitext(filename)
    return 'property/gallaries/{0}/{1}{2}'.format(slugify(unidecode(instance.image_property.name)), slugify(unidecode(name)), '.jpg')

class Logo(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    subtitle = models.CharField(_('Подзаголовок'), max_length=255,  null=True, blank=True,)
    image = models.ImageField(_('Изображение'), max_length=255, upload_to=logo_path, null=True, blank=True,)

    class Meta:
        verbose_name = _('Логотип')
        verbose_name_plural = _('Логотипы')
        ordering = ['-id']


    def __str__(self):
        return self.title

class PropertyImage(models.Model):
    image = models.ImageField(_('Изображение'), max_length=255, upload_to=property_image_path)
    image_property = models.ForeignKey('properties.Property', on_delete=models.CASCADE, related_name='property_gallary', verbose_name=_('Недвижимость'), blank=True, null=True)

    class Meta:
        verbose_name = _('Изображение недвижимости')
        verbose_name_plural = _('Галерея недвижимости')
        ordering = ['-id']
    
    @property
    def tmb_image(self):
        if self.image:
            tmb_path = get_tmb_path(self.image.url)
            return tmb_path
        return None