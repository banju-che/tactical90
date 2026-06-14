from django.urls import path 
from .views import PlayerList, PlayerDetail

urlpatterns = [
    path('', PlayerList.as_view(), name='player_list'),
    path('<int:player_id>', PlayerDetail.as_view(), name='player_detail')
]