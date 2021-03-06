# Generated by Django 3.2.7 on 2021-10-26 15:32

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0019_alter_property_unique_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='created_at',
            field=models.DateField(default=datetime.datetime(2021, 10, 26, 15, 32, 3, 326987, tzinfo=utc), verbose_name='Дата добавления'),
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-26-15-32-03', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
