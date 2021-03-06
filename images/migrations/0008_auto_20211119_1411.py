# Generated by Django 3.2.7 on 2021-11-19 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0007_auto_20211119_1357'),
    ]

    operations = [
        migrations.AddField(
            model_name='logo',
            name='subtitle_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок'),
        ),
        migrations.AddField(
            model_name='logo',
            name='subtitle_mn',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок'),
        ),
        migrations.AddField(
            model_name='logo',
            name='subtitle_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок'),
        ),
        migrations.AddField(
            model_name='logo',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='logo',
            name='title_mn',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
        migrations.AddField(
            model_name='logo',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Название'),
        ),
    ]
