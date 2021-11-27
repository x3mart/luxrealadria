# Generated by Django 3.2.7 on 2021-11-27 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteelements', '0021_homepage_search_button'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='search_button_en',
            field=models.CharField(default='Поиск объектов', max_length=255, null=True, verbose_name='Кнопка поиск'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='search_button_mn',
            field=models.CharField(default='Поиск объектов', max_length=255, null=True, verbose_name='Кнопка поиск'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='search_button_ru',
            field=models.CharField(default='Поиск объектов', max_length=255, null=True, verbose_name='Кнопка поиск'),
        ),
    ]
