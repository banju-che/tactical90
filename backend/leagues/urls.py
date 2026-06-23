from django.urls import path
from .views import LeaguesListCreateAPIView, LeagueRetrieveUpdateDestroyAPIView 

urlpatterns = [
    path('', LeaguesListCreateAPIView.as_view(), name='leagues_list_create_API_view'),
    path('<int:pk>', LeagueRetrieveUpdateDestroyAPIView.as_view(), name='league_retrieve_update_destroy_API_view')
]