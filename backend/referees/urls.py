from django.urls import path 
from .views import RefereesListCreateAPIView, RefereesRetrieveUpdateDestroyAPIView


urlpatterns = [
    path('', RefereesListCreateAPIView.as_view(), name='referees_list'),
    path('<int:referees_id>', RefereesRetrieveUpdateDestroyAPIView.as_view(), name='referees_detail')
]