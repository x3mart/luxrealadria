# Generated by Django 3.2.7 on 2021-12-02 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0039_auto_20211202_1207'),
    ]

    operations = [
        migrations.AddField(
            model_name='filterdata',
            name='price_range',
            field=models.CharField(default='Диапазон цен', max_length=255, verbose_name='Диапазон цен'),
        ),
    ]