from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _


# Create your models here.
class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, is_staff=False):
        if not email:
            raise ValueError(_('Укажите Ваш e-mail'))
        
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff=is_staff
            )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password):
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff = True,
            is_superuser = True,
            is_active = True
            )
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(_('Имя'), max_length=255,  null=True, blank=True,)
    second_name = models.CharField(_('Отчество'), max_length=255,  null=True, blank=True,)
    logo = models.ForeignKey('images.Logo', on_delete=models.PROTECT, verbose_name=_('Логотип'), related_name='user',  null=True, blank=True,)
    last_name = models.CharField(_('Фамилия'), max_length=255, null=True, blank=True,)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(_('Сотрудник'), default=False, )

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS =['name',]

    class Meta:
        verbose_name = _('Пользователь')
        verbose_name_plural = _('Пользователи')
        ordering = ['-id']
    
    @property
    def full_name(self):
        return f'{self.first_name} {self.second_name} {self.last_name}'

    def __str__(self):
        return self.full_name