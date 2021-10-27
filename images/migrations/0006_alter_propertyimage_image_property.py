# Generated by Django 3.2.7 on 2021-10-27 12:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0028_auto_20211027_1418'),
        ('images', '0005_rename_property_propertyimage_image_property'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyimage',
            name='image_property',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='property_gallary', to='properties.property', verbose_name='Недвижимость'),
        ),
    ]
