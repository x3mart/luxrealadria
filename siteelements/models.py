from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class LegalInfo(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='legalinfo',)

    class Meta:
        verbose_name = _('Юр инфа Изображение')
        verbose_name_plural = _('Юр инфа Изображение')

    def __str__(self):
        return 'юр инфа' 


class FAQ(models.Model):
    title = models.CharField(_('Заголовок'), max_length=255,)
    subtitle = models.CharField(_('Подзаголовок'), max_length=255,)
    
    class Meta:
        verbose_name = _('FAQ')
        verbose_name_plural = _('FAQs')
        
    def __str__(self):
        return self.title


class SiteLogo(models.Model):
    logo = models.OneToOneField('images.Logo', on_delete=models.CASCADE, related_name='site_logo', verbose_name=_('Логотип сайта'))

    class Meta:
        verbose_name = _('Логотип сайта')
        verbose_name_plural = _('Логотип сайта')
        
    def __str__(self):
        return 'site logo'


class Contact(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='contacts', blank=True, null=True)
    phone_basic = models.CharField(_('Основной телефон'), max_length=25,)
    phone_additional = models.CharField(_('Основной телефон'), max_length=25, blank=True, null=True)
    email = models.EmailField(_('Электронная почта'),  blank=True, null=True)
    address_basic = models.TextField(_('Основной адрес'), blank=True, null=True)
    address_additional = models.TextField(_('Дополнительный адрес'), blank=True, null=True)

    class Meta:
        verbose_name = _('Основные Контакты')
        verbose_name_plural = _('Основные Контакты')

    def __str__(self):
        return 'контакты' 


class UsefullArticle(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='article',)

    class Meta:
        verbose_name = _('Полезные статьи Изображение')
        verbose_name_plural = _('Полезные статьи Изображение')

    def __str__(self):
        return 'контакты'

class Homepage(models.Model):
    title = models.CharField(_('Заголовок'), max_length=255,)
    subtitle = models.CharField(_('Подзаголовок'), max_length=255,)
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='walpaper',)

    class Meta:
        verbose_name = _('Домашняя страница')
        verbose_name_plural = _('Домашняя страница')
        
    def __str__(self):
        return 'Домашняя страница'