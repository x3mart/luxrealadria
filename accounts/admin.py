from django.contrib import admin
from django import forms
from django.contrib.auth.admin import UserAdmin
from accounts.models import User

# Register your models here.
class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email', 'first_name', 'second_name', 'last_name', 'logo', 'is_superuser', 'is_staff', 'is_active')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class MyUserAdmin(UserAdmin):
    add_form = UserCreationForm
    ordering = ('email',)
    fieldsets = ((None, {'fields':('first_name', 'second_name', 'last_name', 'email', 'password', 'logo', 'is_superuser', 'is_staff', 'is_active', 'groups')}),)
    add_fieldsets = (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'second_name', 'last_name', 'password1', 'password2', 'logo', 'is_superuser', 'is_staff', 'is_active', 'groups'),
        }),
    list_display = ('full_name', 'email', 'is_superuser', 'is_staff', 'is_active')
    list_editable = ('is_superuser', 'is_staff', 'is_active')


admin.site.register(User, MyUserAdmin)