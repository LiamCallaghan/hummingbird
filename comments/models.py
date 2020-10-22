from django.db import models

# Create your models here.
class Comment(models.Model):
    text = models.TextField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    band = models.ForeignKey(
        'bands.Band',
        related_name='comments',
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_comments',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.id} - {self.band}'
