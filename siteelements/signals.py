from django.dispatch import receiver
from django.db.models.signals import post_delete, post_init, post_save
from .models import Contact, Homepage, LegalInfo, UsefullArticle
from utils.images import delete_image, image_processing
from luxrealadria.settings import BASE_DIR
        

@receiver(post_init, sender=Homepage)
def user_post_init(instance, **kwargs):
    instance._current_wallpaper = instance.wallpaper

@receiver(post_save, sender=Homepage)
def user_post_save(instance, **kwargs):
    image_processing(instance.wallpaper, instance._current_wallpaper, 1920, 780)

@receiver(post_delete, sender=Homepage)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_wallpaper)

@receiver(post_init, sender=LegalInfo)
def user_post_init(instance, **kwargs):
    instance._current_wallpaper = instance.wallpaper

@receiver(post_save, sender=LegalInfo)
def user_post_save(instance, **kwargs):
    image_processing(instance.wallpaper, instance._current_wallpaper, 1920, 780)

@receiver(post_delete, sender=LegalInfo)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_wallpaper)

@receiver(post_init, sender=UsefullArticle)
def user_post_init(instance, **kwargs):
    instance._current_wallpaper = instance.wallpaper

@receiver(post_save, sender=UsefullArticle)
def user_post_save(instance, **kwargs):
    image_processing(instance.wallpaper, instance._current_wallpaper, 1920, 780)

@receiver(post_delete, sender=UsefullArticle)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_wallpaper)

@receiver(post_init, sender=Contact)
def user_post_init(instance, **kwargs):
    instance._current_wallpaper = instance.wallpaper

@receiver(post_save, sender=Contact)
def user_post_save(instance, **kwargs):
    image_processing(instance.wallpaper, instance._current_wallpaper, 1920, 780)

@receiver(post_delete, sender=Contact)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_wallpaper)

