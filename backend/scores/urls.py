from django.urls import path 
from .views import ScoreListCreateApiView, ScoreRetrieveDestroyView 

urlpatterns = [
    path('', ScoreListCreateApiView.as_view(), name='score_list_create_api_view'),
    path('<int:pk>', ScoreRetrieveDestroyView.as_view(), name='score_retrieve_destroy_view')
]