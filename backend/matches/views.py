from rest_framework import generics
from .models import Matches
from .serializers import MatchesSerializers

class MatchesListCreateApiView(generics.ListCreateAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers

class MatchesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers