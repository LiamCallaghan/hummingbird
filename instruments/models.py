from django.db import models

# Create your models here.

class Instrument(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name}'
