# Generated by Django 3.2.7 on 2021-10-27 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0022_alter_property_unique_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('icon', models.CharField(max_length=55, verbose_name='Цвет')),
            ],
        ),
        migrations.AddField(
            model_name='property',
            name='video',
            field=models.URLField(blank=True, max_length=255, null=True, verbose_name='Видео'),
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-27-09-18-29', max_length=255, unique=True, verbose_name='Артикул'),
        ),
        migrations.AddField(
            model_name='property',
            name='features',
            field=models.ManyToManyField(related_name='properties', to='properties.Feature', verbose_name='Особенности'),
        ),
    ]
