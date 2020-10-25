from django.urls import path
from .views import InstrumentListView

urlpatterns = [
    path('', InstrumentListView.as_view())
]
