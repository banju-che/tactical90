from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Standings
from .serializers import StandingsSerializer


class StandingListCreateView(generics.ListCreateAPIView):
    queryset = Standings.objects.all()
    serializer_class = StandingsSerializer


class StandingRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Standings.objects.all()
    serializer_class = StandingsSerializer