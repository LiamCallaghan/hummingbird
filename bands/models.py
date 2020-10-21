from django.db import models
from django.core.validators import MinValueValidator

goal_choices = (
    ('1', 'Make music'),
    ('2', 'Make money'),
    ('3', 'Make friends')
)

# Create your models here.
class Band(models.Model):
    name = models.CharField(max_length=50)
    # genre = models.CharField(max_length=50, many=True)
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

    def __str__(self):
        return f'{self.id} - {self.name}'
