from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Article(models.Model):
    title = models.CharField(_('Название'), max_length=255,)
    body = RichTextUploadingField(_('Текст'))
    image = models.ImageField(_('Изображение'), max_length=255, upload_to='articles',)

    class Meta:
        verbose_name = _('Статья')
        verbose_name_plural = _('Статьи')

    def __str__(self):
        return self.title