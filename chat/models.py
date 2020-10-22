from django.db import models

# Create your models here.
class Chat(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    related_band = models.ManyToManyField(
        'bands.Band',
        related_name='band'
    )
    recipient = models.ManyToManyField(
        'jwt_auth.User',
        related_name='recipient'
    )
    status = models.CharField(max_length=20, default='empty')

    def __str__(self):
        return f'{self.recipient}'
