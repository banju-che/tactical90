from rest_framework import generics
from .models import Matches
from .serializers import MatchesSerializers
from users.permissions import  IsFanOrHigher

class MatchesListCreateApiView(generics.ListCreateAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers
    permission_classes = [IsFanOrHigher]

class MatchesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializers
    permission_classes = [IsFanOrHigher]