# Generated by Django 3.2.7 on 2021-10-25 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_alter_contactitem_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactitem',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
