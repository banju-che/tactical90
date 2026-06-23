from django.urls import path
from .views import StandingListCreateView, StandingRetrieveUpdateDestroyView

urlpatterns = [
    path('', StandingListCreateView.as_view(), name='standings-list-create'),
    path('<int:pk>/', StandingRetrieveUpdateDestroyView.as_view(), name='standings-detail-update-destroy'),
]
