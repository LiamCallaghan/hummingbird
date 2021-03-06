# Generated by Django 3.1.2 on 2020-10-21 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0002_auto_20201021_1434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='user',
            name='skill_level',
            field=models.CharField(blank=True, choices=[('1', 'Beginner'), ('2', 'Intermediate'), ('3', 'Expert')], default='1', max_length=12),
        ),
    ]
