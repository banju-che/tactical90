from rest_framework import generics
from .models import Matches
from .serializers import MatchesSerializers
from users.permissions import  IsFanOrHigher
from rest_framework import filters
from .filters import MatchesFilter

class MatchesListCreateApiView(generics.ListCreateAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers
    permission_classes = [IsFanOrHigher]
    filter_backends = [ filters.SearchFilter ]
    filterset_class = MatchesFilter
    search_fields = [
        'league__name', 
        'home_team__name', 
        'away_team__name',
        'winner',
        'utc_date'
        ]

class MatchesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers
    permission_classes = [IsFanOrHigher]