# Generated by Django 3.2.7 on 2021-10-28 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0029_alter_property_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='area',
            field=models.PositiveIntegerField(blank=True, null=True, verbose_name='Площадь'),
        ),
    ]