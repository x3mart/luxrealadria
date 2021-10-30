# Generated by Django 3.2.7 on 2021-10-28 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteelements', '0004_auto_20211025_1311'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Основные Контакты', 'verbose_name_plural': 'Основные Контакты'},
        ),
        migrations.AddField(
            model_name='contact',
            name='address_additional',
            field=models.TextField(blank=True, null=True, verbose_name='Дополнительный адрес'),
        ),
        migrations.AddField(
            model_name='contact',
            name='address_basic',
            field=models.TextField(blank=True, null=True, verbose_name='Основной адрес'),
        ),
        migrations.AddField(
            model_name='contact',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, verbose_name='Электронная почта'),
        ),
        migrations.AddField(
            model_name='contact',
            name='phone_additional',
            field=models.CharField(blank=True, max_length=25, null=True, verbose_name='Основной телефон'),
        ),
        migrations.AddField(
            model_name='contact',
            name='phone_basic',
            field=models.CharField(default=None, max_length=25, verbose_name='Основной телефон'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='contact',
            name='wallpaper',
            field=models.ImageField(blank=True, max_length=255, null=True, upload_to='contacts', verbose_name='Изображение'),
        ),
    ]
