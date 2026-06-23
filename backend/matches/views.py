from rest_framework import generics
from .models import Matches
from .serializers import MatchesSerializers
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class MatchesListCreateApiView(generics.ListCreateAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

class MatchesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers
    permission_classes = [IsAuthenticated]