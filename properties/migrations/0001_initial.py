# Generated by Django 3.2.7 on 2021-10-23 19:01

import ckeditor_uploader.fields
import datetime
from django.db import migrations, models
import django.db.models.deletion
import properties.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Категории',
                'verbose_name_plural': 'Категория',
            },
        ),
        migrations.CreateModel(
            name='Purpose',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Назначение',
                'verbose_name_plural': 'Назначения',
            },
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Регион',
                'verbose_name_plural': 'Регионы',
            },
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('color', models.CharField(max_length=25, verbose_name='Цвет')),
            ],
            options={
                'verbose_name': 'Статус',
                'verbose_name_plural': 'Статусы',
            },
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('unique_id', models.CharField(default='adria-2021-10-23 22:01:30.139682', max_length=255, unique=True, verbose_name='Артикул')),
                ('created_at', models.DateField(default=datetime.date(2021, 10, 23), verbose_name='Дата добавления')),
                ('description', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='Описание')),
                ('wallpaper', models.ImageField(max_length=255, upload_to=properties.models.property_wallpaper_path, verbose_name='Главное фото')),
                ('rooms', models.PositiveIntegerField(default=1, verbose_name='Спальни')),
                ('closets', models.PositiveIntegerField(default=1, verbose_name='Туалеты')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.category', verbose_name='Категория')),
                ('purpose', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.purpose', verbose_name='Назначение')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='properties.region', verbose_name='Регион')),
            ],
            options={
                'verbose_name': 'Недвижимость',
                'verbose_name_plural': 'Недвижимость',
            },
        ),
    ]
