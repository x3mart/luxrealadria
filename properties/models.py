from django.db import models
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import slugify
from unidecode import unidecode
import os
from django.utils import timezone
from ckeditor.fields import RichTextField
from django.template.defaultfilters import truncatechars
from django.utils.html import strip_tags
from utils.images import get_tmb_path


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


class Property(models.Model):
    name = models.CharField(_('Название'), max_length=255,)
    price = models.PositiveIntegerField(_('Цена'), default=0)
    unique_id = models.CharField(_('Артикул'), max_length=255, null=True, blank=True )
    created_at = models.DateField(_('Дата добавления'), default=timezone.now)
    description = RichTextField(_('Описание'))
    wallpaper = models.ImageField(_('Главное фото'), max_length=255, upload_to=property_wallpaper_path)
    video  = models.CharField(_('Видео'), max_length=255, null=True, blank=True)
    rooms = models.PositiveIntegerField(_('Спальни'), default=1)
    closets = models.PositiveIntegerField(_('Туалеты'), default=1)
    area = models.PositiveIntegerField(_('Площадь'), null=True, blank=True)
    address = models.TextField(_('Адрес'), null=True, blank=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='properties', verbose_name=_('Категория'))
    purpose = models.ForeignKey('Purpose', on_delete=models.CASCADE, related_name='properties', verbose_name=_('Назначение'))
    region = models.ForeignKey('Region', on_delete=models.CASCADE, related_name='properties', verbose_name=_('Регион'))
    statuses = models.ManyToManyField('Status', related_name='properties', verbose_name=_('Статус'), blank=True)
    owner = models.ForeignKey('accounts.User', on_delete=models.PROTECT, null=True, blank=True, related_name='users_property')
    is_trend = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    class Meta:
        verbose_name = _('Недвижимость')
        verbose_name_plural = _('Недвижимость')


    def __str__(self):
        return self.name 
    
    @property
    def tmb_wallpaper(self):
        if self.wallpaper:
            tmb_path = get_tmb_path(self.wallpaper.url)
            return tmb_path
        return None
    
    @property
    def short_description(self):
        if self.description:
            return truncatechars(strip_tags(self.description).replace("\r\n", " "), 80)
        return None


class FilterData(models.Model):
    room_title = models.CharField(_('Спальни'), max_length=255,)
    room_any = models.CharField(_('Спальни любое кол-во'), max_length=255,)
    closets_title = models.CharField(_('Санузлы'), max_length=255,)
    closets_any = models.CharField(_('Санузлы любое кол-во'), max_length=255,)
    categories_title = models.CharField(_('Категории'), max_length=255,)
    categories_any = models.CharField(_('Любая категория'), max_length=255,)
    statuses_title = models.CharField(_('Статус'), max_length=255,)
    statuses_any = models.CharField(_('Любой статус'), max_length=255,)
    regions_title = models.CharField(_('Регион'), max_length=255, default='Регион')
    regions_any = models.CharField(_('Любой регион'), max_length=255, default='Любой регион')
    purposes_title = models.CharField(_('Назначение'), max_length=255,)
    purposes_any = models.CharField(_('Любое назначение'), max_length=255,)
    price_range_from = models.CharField(_('Цена От'), max_length=255,)
    price_range_to = models.CharField(_('Цена До'), max_length=255,)

    class Meta:
        verbose_name = _('Фильтр')
        verbose_name_plural = _('Фильтр')
    
    def __str__(self):
        return 'фильтр' 