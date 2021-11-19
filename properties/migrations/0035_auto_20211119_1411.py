# Generated by Django 3.2.7 on 2021-11-19 11:11

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0034_auto_20211119_1357'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='category',
            name='title_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='category',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='feature',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='feature',
            name='title_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='feature',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='property',
            name='address_en',
            field=models.TextField(blank=True, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='property',
            name='address_mn',
            field=models.TextField(blank=True, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='property',
            name='address_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='property',
            name='description_en',
            field=ckeditor.fields.RichTextField(null=True, verbose_name='Описание'),
        ),
        migrations.AddField(
            model_name='property',
            name='description_mn',
            field=ckeditor.fields.RichTextField(null=True, verbose_name='Описание'),
        ),
        migrations.AddField(
            model_name='property',
            name='description_ru',
            field=ckeditor.fields.RichTextField(null=True, verbose_name='Описание'),
        ),
        migrations.AddField(
            model_name='property',
            name='name_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='property',
            name='name_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='property',
            name='name_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='purpose',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='purpose',
            name='title_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='purpose',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='region',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='region',
            name='title_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='region',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='status',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='status',
            name='title_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='status',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
    ]
