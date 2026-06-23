from .models import Seasons 
from rest_framework import generics 
from .serializers import SeasonsSerializers
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class SeasonsListCreateView(generics.ListCreateAPIView):
    queryset = Seasons.objects.all()
    serializer_class = SeasonsSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

class SeasonsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seasons.objects.all()
    serializer_class = SeasonsSerializers
    permission_classes = [IsAuthenticated]