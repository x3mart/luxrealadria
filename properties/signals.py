from django.dispatch import receiver
from django.db.models.signals import post_delete, post_init, post_save
from .models import Category, Property
from utils.images import delete_image, image_processing
        

@receiver(post_init, sender=Category)
def user_post_init(instance, **kwargs):
    instance._current_image = instance.image

@receiver(post_save, sender=Category)
def user_post_save(instance, **kwargs):
    image_processing(instance.image, instance._current_image, 350, 235)

@receiver(post_delete, sender=Category)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_image)

@receiver(post_init, sender=Property)
def user_post_init(instance, **kwargs):
    instance._current_wallpaper = instance.wallpaper

@receiver(post_save, sender=Property)
def user_post_save(instance, **kwargs):
    image_processing(instance.wallpaper, instance._current_wallpaper, 1920, 780, 350, 235)
    if not instance.unique_id:
        instance.unique_id = f'adria-{instance.id}'
        instance.save()

@receiver(post_delete, sender=Property)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_wallpaper)