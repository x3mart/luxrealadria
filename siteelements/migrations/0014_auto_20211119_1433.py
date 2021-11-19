# Generated by Django 3.2.7 on 2021-11-19 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteelements', '0013_auto_20211119_1424'),
    ]

    operations = [
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True, verbose_name='Пункт меню')),
                ('title_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Пункт меню')),
                ('title_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Пункт меню')),
                ('title_mn', models.CharField(blank=True, max_length=255, null=True, verbose_name='Пункт меню')),
            ],
            options={
                'verbose_name': 'Пункт меню',
                'verbose_name_plural': 'Меню',
            },
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_subtitle',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_subtitle_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_subtitle_mn',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_subtitle_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_title',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_title_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_title_mn',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='category_title_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Категории Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_subtitle',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_subtitle_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_subtitle_mn',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_subtitle_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Подзаголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_title',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_title_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_title_mn',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Заголовок'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='recently_added_title_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Недавно добавленные Заголовок'),
        ),
    ]