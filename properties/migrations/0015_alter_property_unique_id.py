# Generated by Django 3.2.7 on 2021-10-25 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0014_auto_20211025_1557'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-25-17-40-44', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
