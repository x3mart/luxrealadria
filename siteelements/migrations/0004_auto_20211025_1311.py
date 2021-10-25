# Generated by Django 3.2.7 on 2021-10-25 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteelements', '0003_auto_20211024_1720'),
    ]

    operations = [
        migrations.CreateModel(
            name='UsefullArticle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wallpaper', models.ImageField(max_length=255, upload_to='article', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Полезные статьи Изображение',
                'verbose_name_plural': 'Полезные статьи Изображение',
            },
        ),
        migrations.RenameField(
            model_name='contact',
            old_name='image',
            new_name='wallpaper',
        ),
        migrations.RenameField(
            model_name='legalinfo',
            old_name='image',
            new_name='wallpaper',
        ),
    ]
