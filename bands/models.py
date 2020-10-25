from django.db import models
from django.core.validators import MinValueValidator

goal_choices = (
    ('Make music', 'Make music'),
    ('Make money', 'Make money'),
    ('Make friends', 'Make friends')
)

# Create your models here.
class Band(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    goals = models.CharField(max_length=12, choices=goal_choices, default= '1')
    size = models.PositiveIntegerField(validators=[MinValueValidator(2)], default= 2)
    # city = models.CharField(max_length=255)
    # location = PlainLocationField(based_fields=['city'], zoom=7)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_band',
        on_delete=models.CASCADE
    )
    genre = models.ManyToManyField(
        'genres.Genre',
        related_name='band',
        blank=True
    )

    def __str__(self):
        return f'{self.id} - {self.name}'
