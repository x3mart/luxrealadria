from django.db import models
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import slugify
from unidecode import unidecode
import os
from datetime import date, datetime
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField


# Create your models here.
def property_wallpaper_path(instance, filename):
    name, extension = os.path.splitext(filename)
    return 'property/wallpapers/{0}/{1}{2}'.format(slugify(unidecode(instance.name)), slugify(unidecode(name)), '.jpg')



class Category(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    image = models.ImageField(_('Изображение'), max_length=255, upload_to='categories', null=True, blank=True)
    icon = models.CharField(_('Иконка'), max_length=25, null=True, blank=True)
    order = models.PositiveIntegerField(_('Позиция'), default=1)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Категории')
        verbose_name_plural = _('Категория')
        ordering = ['order', '-id']


    def __str__(self):
        return self.title 


class Purpose(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Назначение')
        verbose_name_plural = _('Назначения')


    def __str__(self):
        return self.title 


class Region(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Регион')
        verbose_name_plural = _('Регионы')


    def __str__(self):
        return self.title 


class Status(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    color = models.CharField(_('Цвет'), max_length=25,)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Статус')
        verbose_name_plural = _('Статусы')


    def __str__(self):
        return self.title


class Feature(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    icon = models.CharField(_('Иконка'), max_length=55,)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('Особенность')
        verbose_name_plural = _('Особенности')


    def __str__(self):
        return self.title


class Property(models.Model):
    name = models.CharField(_('Название'), max_length=255,)
    price = models.PositiveIntegerField(_('Цена'), default=0)
    unique_id = models.CharField(_('Артикул'), max_length=255, unique=True, default=f'adria-{timezone.now():%Y-%m-%d-%H-%M-%S}')
    created_at = models.DateField(_('Дата добавления'), default=timezone.now)
    description = RichTextUploadingField(_('Описание'))
    wallpaper = models.ImageField(_('Главное фото'), max_length=255, upload_to=property_wallpaper_path)
    video  = models.URLField(_('Видео'), max_length=255,null=True, blank=True)
    rooms = models.PositiveIntegerField(_('Спальни'), default=1)
    closets = models.PositiveIntegerField(_('Туалеты'), default=1)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='properties', verbose_name=_('Категория'))
    purpose = models.ForeignKey('Purpose', on_delete=models.CASCADE, related_name='properties', verbose_name=_('Назначение'))
    region = models.ForeignKey('Region', on_delete=models.CASCADE, related_name='properties', verbose_name=_('Регион'))
    statuses = models.ManyToManyField('Status', related_name='properties', verbose_name=_('Статус'))
    features = models.ManyToManyField('Feature', related_name='properties', verbose_name=_('Особенности'))
    is_trend = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    class Meta:
        verbose_name = _('Недвижимость')
        verbose_name_plural = _('Недвижимость')


    def __str__(self):
        return self.name 

