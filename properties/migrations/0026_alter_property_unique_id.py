# Generated by Django 3.2.7 on 2021-10-27 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0025_auto_20211027_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-27-10-24-09', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]