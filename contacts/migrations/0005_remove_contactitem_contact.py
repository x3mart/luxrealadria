# Generated by Django 3.2.7 on 2021-10-28 14:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0004_contactitem_is_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactitem',
            name='contact',
        ),
    ]
