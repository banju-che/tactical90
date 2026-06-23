from rest_framework import generics
from .models import Standings
from .serializers import StandingsSerializer
from users.permissions import IsFanOrHigher


class StandingListCreateView(generics.ListCreateAPIView):
    queryset = Standings.objects.all()
    serializer_class = StandingsSerializer
    permission_classes = [IsFanOrHigher]


class StandingRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Standings.objects.all()
    serializer_class = StandingsSerializer
    permission_classes = [IsFanOrHigher]