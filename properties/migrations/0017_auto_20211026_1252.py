# Generated by Django 3.2.7 on 2021-10-26 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0016_auto_20211026_1238'),
    ]

    operations = [
        migrations.RenameField(
            model_name='property',
            old_name='status',
            new_name='statuses',
        ),
        migrations.AlterField(
            model_name='property',
            name='unique_id',
            field=models.CharField(default='adria-2021-10-26-12-52-25', max_length=255, unique=True, verbose_name='Артикул'),
        ),
    ]
