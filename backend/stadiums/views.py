
from rest_framework import generics
from .models import Stadiums
from .serializers import StadiumSerializers

class StadiumsListCreateView(generics.ListCreateAPIView):
    queryset = Stadiums.objects.all()
    serializer_class = StadiumSerializers

class StadiumsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stadiums.objects.all()
    serializer_class = StadiumSerializers