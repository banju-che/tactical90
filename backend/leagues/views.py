from .models import Leagues 
from .serializers import LeaguesSerializer
from rest_framework import generics 
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class LeaguesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Leagues.objects.all()
    serializer_class = LeaguesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class LeagueRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Leagues.objects.all()
    serializer_class = LeaguesSerializer
    permission_classes = [IsAuthenticated]