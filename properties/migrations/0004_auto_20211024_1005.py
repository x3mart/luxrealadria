# Generated by Django 3.2.7 on 2021-10-24 07:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0003_auto_20211024_0002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.category', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='property',
            name='purpose',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.purpose', verbose_name='Назначение'),
        ),
        migrations.AlterField(
            model_name='property',
            name='region',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.region', verbose_name='Регион'),
        ),
        migrations.AlterField(
            model_name='property',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.status', verbose_name='Статус'),
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-24 10:05:55.785785', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
