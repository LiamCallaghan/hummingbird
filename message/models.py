from django.db import models

# Create your models here.
class Message(models.Model):
    text = models.TextField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    sent_by = models.ForeignKey(
        'chat.Chat',
        related_name='sent_messages',
        on_delete=models.CASCADE
    )
    status = models.CharField(max_length=20, default='Unread')

    def __str__(self):
        return f'{self.sent_by} - {self.created_at}'
