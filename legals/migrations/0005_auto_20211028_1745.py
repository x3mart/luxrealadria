# Generated by Django 3.2.7 on 2021-10-28 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('legals', '0004_auto_20211028_1732'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='faqitem',
            name='faq',
        ),
        migrations.RemoveField(
            model_name='legalinfoitem',
            name='legal_info',
        ),
    ]
