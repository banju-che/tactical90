from .models import Players 
from .serializers import PlayersSerializer
from rest_framework import generics
from users.permissions import IsFanOrHigher
from django_filters.rest_framework import DjangoFilterBackend
from .filters import PlayerFilter
from rest_framework import filters

class PlayerList(generics.ListCreateAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer
    permission_classes = [IsFanOrHigher]
    filter_backends = [
        DjangoFilterBackend, 
        filters.SearchFilter,
        filters.OrderingFilter
        ]
    filterSet_class = PlayerFilter
    search_fields = [
        "name",
        "team__name",
        "nationality",
    ]
    ordering_fields = [
        "name",
        "date_of_birth",
        "nationality",
    ]

    ordering = ["name"]
    
class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer 
    permission_classes = [IsFanOrHigher] 