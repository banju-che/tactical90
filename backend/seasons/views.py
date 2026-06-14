from .models import Seasons 
from rest_framework import generics 
from .serializers import SeasonsSerializers

class SeasonsListCreateView(generics.ListCreateAPIView):
    queryset = Seasons.objects.all()
    serializer_class = SeasonsSerializers

class SeasonsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seasons.objects.all()
    serializer_class = SeasonsSerializers