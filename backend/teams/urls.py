from django.urls import path
from .views import TeamListCreateView, TeamRetrieveUpdateDestroyView

urlpatterns = [
    path('', TeamListCreateView.as_view(), name='team-list-create'),
    path('<int:pk>/', TeamRetrieveUpdateDestroyView.as_view(), name='team-detail-update-destroy'),
]
