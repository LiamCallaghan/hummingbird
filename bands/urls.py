from django.urls import path
from .views import BandListView, BandDetailView

urlpatterns = [
    path('', BandListView.as_view()),
    path('<int:pk>/', BandDetailView.as_view()),
]