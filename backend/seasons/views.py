from .models import Seasons 
from rest_framework import generics 
from .serializers import SeasonsSerializers
from users.permissions import IsFanOrHigher

class SeasonsListCreateView(generics.ListCreateAPIView):
    queryset = Seasons.objects.all()
    serializer_class = SeasonsSerializers
    permission_classes = [IsFanOrHigher]

class SeasonsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seasons.objects.all()
    serializer_class = SeasonsSerializers
    permission_classes = [IsFanOrHigher]