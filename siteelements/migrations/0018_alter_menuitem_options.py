# Generated by Django 3.2.7 on 2021-11-27 10:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('siteelements', '0017_alter_menuitem_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='menuitem',
            options={'ordering': ('id',), 'verbose_name': 'Пункт меню', 'verbose_name_plural': 'Меню'},
        ),
    ]
