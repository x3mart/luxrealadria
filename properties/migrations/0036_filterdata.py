# Generated by Django 3.2.7 on 2021-11-19 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0035_auto_20211119_1411'),
    ]

    operations = [
        migrations.CreateModel(
            name='FilterData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_title', models.CharField(max_length=255, verbose_name='Спальни')),
                ('room_title_ru', models.CharField(max_length=255, null=True, verbose_name='Спальни')),
                ('room_title_en', models.CharField(max_length=255, null=True, verbose_name='Спальни')),
                ('room_title_mn', models.CharField(max_length=255, null=True, verbose_name='Спальни')),
                ('room_any', models.CharField(max_length=255, verbose_name='Спальни любое кол-во')),
                ('room_any_ru', models.CharField(max_length=255, null=True, verbose_name='Спальни любое кол-во')),
                ('room_any_en', models.CharField(max_length=255, null=True, verbose_name='Спальни любое кол-во')),
                ('room_any_mn', models.CharField(max_length=255, null=True, verbose_name='Спальни любое кол-во')),
                ('closets_title', models.CharField(max_length=255, verbose_name='Санузлы')),
                ('closets_title_ru', models.CharField(max_length=255, null=True, verbose_name='Санузлы')),
                ('closets_title_en', models.CharField(max_length=255, null=True, verbose_name='Санузлы')),
                ('closets_title_mn', models.CharField(max_length=255, null=True, verbose_name='Санузлы')),
                ('closets_any', models.CharField(max_length=255, verbose_name='Санузлы любое кол-во')),
                ('closets_any_ru', models.CharField(max_length=255, null=True, verbose_name='Санузлы любое кол-во')),
                ('closets_any_en', models.CharField(max_length=255, null=True, verbose_name='Санузлы любое кол-во')),
                ('closets_any_mn', models.CharField(max_length=255, null=True, verbose_name='Санузлы любое кол-во')),
                ('categories_title', models.CharField(max_length=255, verbose_name='Категории')),
                ('categories_title_ru', models.CharField(max_length=255, null=True, verbose_name='Категории')),
                ('categories_title_en', models.CharField(max_length=255, null=True, verbose_name='Категории')),
                ('categories_title_mn', models.CharField(max_length=255, null=True, verbose_name='Категории')),
                ('categories_any', models.CharField(max_length=255, verbose_name='Любая категория')),
                ('categories_any_ru', models.CharField(max_length=255, null=True, verbose_name='Любая категория')),
                ('categories_any_en', models.CharField(max_length=255, null=True, verbose_name='Любая категория')),
                ('categories_any_mn', models.CharField(max_length=255, null=True, verbose_name='Любая категория')),
                ('statuses_title', models.CharField(max_length=255, verbose_name='Статус')),
                ('statuses_title_ru', models.CharField(max_length=255, null=True, verbose_name='Статус')),
                ('statuses_title_en', models.CharField(max_length=255, null=True, verbose_name='Статус')),
                ('statuses_title_mn', models.CharField(max_length=255, null=True, verbose_name='Статус')),
                ('statuses_any', models.CharField(max_length=255, verbose_name='Любой статус')),
                ('statuses_any_ru', models.CharField(max_length=255, null=True, verbose_name='Любой статус')),
                ('statuses_any_en', models.CharField(max_length=255, null=True, verbose_name='Любой статус')),
                ('statuses_any_mn', models.CharField(max_length=255, null=True, verbose_name='Любой статус')),
                ('purposes_title', models.CharField(max_length=255, verbose_name='Назначение')),
                ('purposes_title_ru', models.CharField(max_length=255, null=True, verbose_name='Назначение')),
                ('purposes_title_en', models.CharField(max_length=255, null=True, verbose_name='Назначение')),
                ('purposes_title_mn', models.CharField(max_length=255, null=True, verbose_name='Назначение')),
                ('purposes_any', models.CharField(max_length=255, verbose_name='Любое назначение')),
                ('purposes_any_ru', models.CharField(max_length=255, null=True, verbose_name='Любое назначение')),
                ('purposes_any_en', models.CharField(max_length=255, null=True, verbose_name='Любое назначение')),
                ('purposes_any_mn', models.CharField(max_length=255, null=True, verbose_name='Любое назначение')),
                ('price_range_from', models.CharField(max_length=255, verbose_name='Цена От')),
                ('price_range_from_ru', models.CharField(max_length=255, null=True, verbose_name='Цена От')),
                ('price_range_from_en', models.CharField(max_length=255, null=True, verbose_name='Цена От')),
                ('price_range_from_mn', models.CharField(max_length=255, null=True, verbose_name='Цена От')),
                ('price_range_to', models.CharField(max_length=255, verbose_name='Цена До')),
                ('price_range_to_ru', models.CharField(max_length=255, null=True, verbose_name='Цена До')),
                ('price_range_to_en', models.CharField(max_length=255, null=True, verbose_name='Цена До')),
                ('price_range_to_mn', models.CharField(max_length=255, null=True, verbose_name='Цена До')),
            ],
        ),
    ]
