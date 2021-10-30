# Generated by Django 3.2.7 on 2021-10-27 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0027_alter_property_unique_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='features',
            field=models.ManyToManyField(blank=True, related_name='properties', to='properties.Feature', verbose_name='Особенности'),
        ),
        migrations.AlterField(
            model_name='property',
            name='statuses',
            field=models.ManyToManyField(blank=True, related_name='properties', to='properties.Status', verbose_name='Статус'),
        ),
    ]