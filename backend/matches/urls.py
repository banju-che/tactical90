from django.urls import path
from .views import MatchesListCreateApiView, MatchesRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('', MatchesListCreateApiView.as_view(), name='matche_list_create_API_view'),
    path('<int:matches_id>', MatchesRetrieveUpdateDestroyAPIView.as_view(), name='matches_retrieve_update_destroy_view')
]