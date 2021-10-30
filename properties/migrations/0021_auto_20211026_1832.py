# Generated by Django 3.2.7 on 2021-10-26 15:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0020_auto_20211026_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='created_at',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='Дата добавления'),
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-26-15-32-35', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
