from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField

# Create your models here.
class LegalInfo(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='legalinfo',)
    title = models.CharField(_('Заголовок'), max_length=255, blank=True, null=True)
    text = models.TextField(_('Текст'), blank=True, null=True)

    class Meta:
        verbose_name = _('Юр инфа.')
        verbose_name_plural = _('Юр инфа.')

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
    title = models.CharField(_('Заголовок'), max_length=255, blank=True, null=True)
    text = models.TextField(_('Текст'), blank=True, null=True)
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
    title = models.CharField(_('Заголовок'), max_length=255, blank=True, null=True)
    text = models.TextField(_('Текст'), blank=True, null=True)

    class Meta:
        verbose_name = _('Полезные статьи')
        verbose_name_plural = _('Полезные статьи')

    def __str__(self):
        return 'полезные статьи'


class PropertyPage(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='properties',)

    class Meta:
        verbose_name = _('Недвижимость')
        verbose_name_plural = _('Недвижимость')

    def __str__(self):
        return 'недвижимость'



class LoginPage(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='login',)

    class Meta:
        verbose_name = _('Вход')
        verbose_name_plural = _('Вход')

    def __str__(self):
        return 'вход пользователя'


class RegisterPage(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='register',)

    class Meta:
        verbose_name = _('Регистрация')
        verbose_name_plural = _('Регистрация')

    def __str__(self):
        return 'Регистрация пользователя'


class Error404Page(models.Model):
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='errors',)
    title = models.CharField(_('Заголовок'), max_length=255,)
    text = models.TextField(_('Текст'), blank=True, null=True)

    class Meta:
        verbose_name = _('404')
        verbose_name_plural = _('404')

    def __str__(self):
        return '404'


class Homepage(models.Model):
    title = models.CharField(_('Заголовок'), max_length=255,)
    subtitle = models.CharField(_('Подзаголовок'), max_length=255,)
    wallpaper = models.ImageField(_('Изображение'), max_length=255, upload_to='homepage',)
    footer_text = RichTextField(_('Текст футера'), null=True, blank=True)

    class Meta:
        verbose_name = _('Домашняя страница')
        verbose_name_plural = _('Домашняя страница')
        
    def __str__(self):
        return 'Домашняя страница'