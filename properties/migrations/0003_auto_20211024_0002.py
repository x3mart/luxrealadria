# Generated by Django 3.2.7 on 2021-10-23 21:02

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0002_alter_property_unique_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='status',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='property', to='properties.status', verbose_name='Статус'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='property',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property', to='properties.category', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='property',
            name='created_at',
            field=models.DateField(default=datetime.date(2021, 10, 24), verbose_name='Дата добавления'),
        ),
        migrations.AlterField(
            model_name='property',
            name='purpose',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property', to='properties.purpose', verbose_name='Назначение'),
        ),
        migrations.AlterField(
            model_name='property',
            name='region',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property', to='properties.region', verbose_name='Регион'),
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-24 00:01:58.554034', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
