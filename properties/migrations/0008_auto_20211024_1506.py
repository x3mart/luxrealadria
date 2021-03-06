# Generated by Django 3.2.7 on 2021-10-24 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0007_auto_20211024_1452'),
    ]

    operations = [
        migrations.AddField(
            model_name='region',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-24 15:06:56.828929', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
