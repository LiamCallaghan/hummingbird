# Generated by Django 3.1.2 on 2020-10-21 14:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bands', '0002_auto_20201021_1351'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='band',
            name='city',
        ),
        migrations.RemoveField(
            model_name='band',
            name='location',
        ),
    ]
