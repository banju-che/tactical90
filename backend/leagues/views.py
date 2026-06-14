from .models import Leagues 
from .serializers import LeaguesSerializer
from rest_framework import generics 

class LeaguesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Leagues.objects.all()
    serializer_class = LeaguesSerializer

class LeagueRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Leagues.objects.all()
    serializer_class = LeaguesSerializer