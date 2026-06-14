from django.urls import path 
from .views import SeasonsListCreateView, SeasonsRetrieveUpdateDestroyView

urlpatterns = [
    path('', SeasonsListCreateView.as_view(), name='seasons_list_create_view'),
    path('<int:seasons_id>', SeasonsRetrieveUpdateDestroyView.as_view(), name='seasons_retrieve_update_destroy_view')
]