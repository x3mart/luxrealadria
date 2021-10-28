# Generated by Django 3.2.7 on 2021-10-28 14:32

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('legals', '0003_auto_20211025_1740'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faqitem',
            name='answer',
            field=ckeditor.fields.RichTextField(verbose_name='Ответ'),
        ),
        migrations.AlterField(
            model_name='faqitem',
            name='question',
            field=models.TextField(verbose_name='Вопрос'),
        ),
        migrations.AlterField(
            model_name='legalinfoitem',
            name='body',
            field=ckeditor.fields.RichTextField(verbose_name='Текст'),
        ),
    ]
