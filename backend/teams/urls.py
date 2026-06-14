from django.urls import path
from .views import TeamListCreateView, TeamRetrieveUpdateDestroyView

urlpatterns = [
    path('', TeamListCreateView.as_view(), name='team-list-create'),
    path('<int:team_id>/', TeamRetrieveUpdateDestroyView.as_view(), name='team-detail-update-destroy'),
]
