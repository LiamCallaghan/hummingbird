from django.urls import path
from .views import BandListView

urlpatterns = [
    path('', BandListView.as_view())
]