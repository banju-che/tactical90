from django.urls import path
from .views import StadiumsListCreateView, StadiumsRetrieveUpdateDestroyView

urlpatterns = [
    path('', StadiumsListCreateView.as_view(), name='stadium-list-create'),
    path('<int:team_id>/', StadiumsRetrieveUpdateDestroyView.as_view(), name='stadium-detail-update-destroy'),
] 