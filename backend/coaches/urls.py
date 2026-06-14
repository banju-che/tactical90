from django.urls import path
from .views import coachesListCreateView, coachesRetrieveUpdateDestroyView

urlpatterns = [
    path('', coachesListCreateView.as_view(), name='coaches_list_create'),
    path('<int:coaches_id>/', coachesRetrieveUpdateDestroyView.as_view(), name='coaches_retrieve_update_destroy_view')
]