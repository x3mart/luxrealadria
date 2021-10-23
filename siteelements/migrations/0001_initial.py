# Generated by Django 3.2.7 on 2021-10-23 20:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('images', '0002_auto_20211023_2201'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(max_length=255, upload_to='contacts', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Контакты Изображение',
                'verbose_name_plural': 'Контакты Изображение',
            },
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('subtitle', models.CharField(max_length=255, verbose_name='Подзаголовок')),
            ],
            options={
                'verbose_name': 'FAQ',
                'verbose_name_plural': 'FAQs',
            },
        ),
        migrations.CreateModel(
            name='LegalInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(max_length=255, upload_to='legalinfo', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Юр инфа Изображение',
                'verbose_name_plural': 'Юр инфа Изображение',
            },
        ),
        migrations.CreateModel(
            name='SiteLogo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='site_logo', to='images.logo', verbose_name='Логотип сайта')),
            ],
            options={
                'verbose_name': 'FAQ',
                'verbose_name_plural': 'FAQs',
            },
        ),
    ]
