from django.db import models
from django.contrib.auth.models import AbstractUser

skill_choices = (
    ('Beginner', 'Beginner'),
    ('Intermediate', 'Intermediate'),
    ('Expert', 'Expert')
)

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    skill_level = models.CharField(
        max_length=12,
        choices=skill_choices,
        default='Beginner',
        blank=True
    )
    profile_image = models.CharField(max_length=800, default='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsDFy7kDSzHSPQDGGUXymbffL0plCs496Etw&usqp=CAU')
    instrument = models.ManyToManyField(
        'instruments.Instrument',
        related_name='user',
        blank=True
    )
    # city = models.CharField(max_length=255)
    # location = PlainLocationField(based_fields=['city'], zoom=7)
