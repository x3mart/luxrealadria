from django.dispatch import receiver
from django.db.models.signals import post_delete, post_init, post_save
from .models import Article
from utils.images import delete_image, image_processing, resize_with_aspectratio
from django.conf import settings


@receiver(post_init, sender=Article)
def user_post_init(instance, **kwargs):
    instance._current_image = instance.image

@receiver(post_save, sender=Article)
def user_post_save(instance, **kwargs):
    image_processing(instance.image, instance._current_image, 1920, 780)
    for token in instance.body.split():
        if token.startswith('src='):
            filepath = token.split('=')[1].strip('"').replace('%40', '@')
            filepath = filepath.replace('/media', settings.MEDIA_ROOT)
            resize_with_aspectratio(filepath, 1140, 600)

@receiver(post_delete, sender=Article)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_image)