from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class LegalInfo(models.Model):
    image = models.ImageField(_('Изображение'), max_length=255, upload_to='legalinfo',)

    class Meta:
        verbose_name = _('Юр инфа Изображение')
        verbose_name_plural = _('Юр инфа Изображение')

    def __str__(self):
        return 'юр инфа' 


class FAQ(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
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
    image = models.ImageField(_('Изображение'), max_length=255, upload_to='contacts',)

    class Meta:
        verbose_name = _('Контакты Изображение')
        verbose_name_plural = _('Контакты Изображение')

    def __str__(self):
        return 'контакты' 