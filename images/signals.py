from django.dispatch import receiver
from django.db.models.signals import post_delete, post_init, post_save
from images.models import PropertyImage
from utils.images import delete_image, image_processing
from luxrealadria.settings import BASE_DIR
        

@receiver(post_init, sender=PropertyImage)
def user_post_init(instance, **kwargs):
    instance._current_image = instance.image

@receiver(post_save, sender=PropertyImage)
def user_post_save(instance, **kwargs):
    image_processing(instance.image, instance._current_image, 1280, 800, 160, 100)

@receiver(post_delete, sender=PropertyImage)
def user_post_delete(instance, **kwargs):
    delete_image(instance._current_image)
