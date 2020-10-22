from django.db import models

# Create your models here.
class Chat(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    related_band = models.ForeignKey(
        'bands.Band',
        related_name='chats',
        on_delete=models.CASCADE
    )
    sender = models.ForeignKey(
        'jwt_auth.User',
        related_name='sent_chats',
        on_delete=models.CASCADE
    )
    status = models.CharField(max_length=20, default='empty')

    def __str__(self):
        return f'{self.sender} => {self.related_band}'
