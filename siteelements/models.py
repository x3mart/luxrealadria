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
    call_us_title = models.CharField(_('Заголовок'), default='Все просто', max_length=255,)
    call_us_text = models.CharField(_('Текст'), default='У вас возникли вопросы, жалобы, или предложения? Просто позвоните нам.', max_length=255,)
    call_us_button = models.CharField(_('Кнопка'), default='Позвонить', max_length=255,)
    
    
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
    phone_additional = models.CharField(_('Дополнительный телефон'), max_length=25, blank=True, null=True)
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
    title = models.CharField(_('Заголовок'), max_length=255, blank=True, null=True)
    text = models.TextField(_('Текст'), blank=True, null=True)
    more_button = models.CharField(_('Кнопка подробнее'), default='Подробнее', max_length=255,)
    filter_title = models.CharField(_('Заголовок фильтра'), default='Фильтр объектов', max_length=255,)
    new_property_title = models.CharField(_('Заголовок нвых объектов'), default='Новые объекты', max_length=255,)
    property_description_title = models.CharField(_('Заголовок описания объекта'), default='Описание объекта', max_length=255,)
    features_title = models.CharField(_('Заголовок характеристик объекта'), default='Характеристики', max_length=255,)

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
    recently_added_title = models.CharField(_('Недавно добавленные Заголовок'), null=True, blank=True, max_length=255,)
    recently_added_subtitle = models.CharField(_('Недавно добавленные Подзаголовок'), null=True, blank=True, max_length=255,)
    category_title = models.CharField(_('Категории Заголовок'), null=True, blank=True, max_length=255,)
    category_subtitle = models.CharField(_('Категории Подзаголовок'), null=True, blank=True, max_length=255,)
    trend_title = models.CharField(_('В тренде Заголовок'), default='В тренде', max_length=255,)
    trend_subtitle = models.CharField(_('В тренде  Подзаголовок'), default='Наши лучшие объекты', max_length=255,)
    login = models.CharField(_('Вход для агентов'), default='Вход для агентов', max_length=255,)
    class Meta:
        verbose_name = _('Домашняя страница')
        verbose_name_plural = _('Домашняя страница')
        
    def __str__(self):
        return 'Домашняя страница'

class MenuItem(models.Model):
    title = models.CharField(_('Пункт меню'), max_length=255, blank=True, null=True)
    link = models.CharField(_('Ссылка'), max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = _('Пункт меню')
        verbose_name_plural = _('Меню')
        ordering = ('id',)

    def __str__(self):
        return self.title

class SubMenuItem(models.Model):
    title = models.CharField(_('Подпункт меню'), max_length=255, blank=True, null=True)
    link = models.CharField(_('ссылка'), max_length=255, blank=True, null=True)
    menu_item = models.ForeignKey('MenuItem', on_delete=models.CASCADE, related_name='submenu_items')

    class Meta:
        verbose_name = _('Подпункт меню')
        verbose_name_plural = _('Подпункты меню')

    def __str__(self):
        return self.title


class Feature(models.Model):
    type_title = models.CharField(_('Заголовок тип объекта'), default='Тип объекта', max_length=255,)
    area_title = models.CharField(_('Заголовок метраж'), default='Метраж', max_length=255,)
    property_id_title = models.CharField(_('Заголовок Id объекта'), default='Id объекта', max_length=255,)
    bathroom_title = models.CharField(_('Заголовок санузел'), default='Санузлов', max_length=255,)
    bedroom_iitle = models.CharField(_('Заголовок спальня'), default='Спальни', max_length=255,)
    region_title = models.CharField(_('Заголовок регион'), default='Регион', max_length=255,)

    class Meta:
        verbose_name = _('Заголовоки Характеристик ')
        verbose_name_plural = _('Заголовоки Характеристик')


    def __str__(self):
        return 'Заголовоки Характеристик'


class MobileMenu(models.Model):
    menu_title = models.CharField(_('Пункт меню'), max_length=255, default='Меню')
    social_title = models.CharField(_('Пункт соцсети'), max_length=255, default='соцсети')
    messenger_title = models.CharField(_('Пункт мессенджеры'), max_length=255, default='мессенджеры')

    class Meta:
        verbose_name = _('Мобильное меню')
        verbose_name_plural = _('Мобильное меню')

    def __str__(self):
        return 'Мобильное меню'