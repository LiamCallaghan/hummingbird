from django.db import models
from django.contrib.auth.models import AbstractUser

# instrument_choices = (
    # ('VOC', 'Vocals'),
    # ('DMK', 'Drum Kit'),
    # ('LEG', 'Lead Guitar'),
    # ('RYG', 'Rhythm Guitar'),
    # ('BSG', 'Bass Guitar'),
    # ('ACG', 'Acoustic Guitar'),
    # ('UKE', 'Ukulele'),
    # ('HRP', 'Harp'),
    # ('BNJ', 'Banjo'),
    # ('ACC', 'Accordion'),
    # ('PAN', 'Piano'),
    # ('KYB', 'Keyboard'),
    # ('SAX', 'Saxophone'),
    # ('TRP', 'Trumpet'),
    # ('CLR', 'Clarinet'),
    # ('FLT', 'Flute'),
    # ('BGP', 'Bagpipe'),
    # ('TRM', 'Trombone'),
    # ('HRM', 'Harmonica'),
    # ('OBE', 'Oboe'),
    # ('CEL', 'Cello'),
    # ('VLN', 'Violin'),
    # ('DBB', 'Double Bass'),
    # ('SNT', 'Synth'),
    # ('DRM', 'Drum Machine'),
# )

skill_choices = (
    ('1', 'Beginner'),
    ('2', 'Intermediate'),
    ('3', 'Expert')
)

# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    skill_level = models.CharField(max_length=12, choices=skill_choices, default='1', blank=True)
    profile_image = models.CharField(max_length=300, blank=True)
    instrument = models.ManyToManyField(
        'instruments.Instrument',
        related_name='user'
    )
    # city = models.CharField(max_length=255)
    # location = PlainLocationField(based_fields=['city'], zoom=7)
