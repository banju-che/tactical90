from .models import Leagues 
from .serializers import LeaguesSerializer
from rest_framework import generics 
from users.permissions import IsFanOrHigher

class LeaguesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Leagues.objects.all()
    serializer_class = LeaguesSerializer
    permission_classes = [IsFanOrHigher]

class LeagueRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Leagues.objects.all()
    serializer_class = LeaguesSerializer
    permission_classes = [IsFanOrHigher]