
from rest_framework import generics
from .models import Stadiums
from .serializers import StadiumSerializers
from users.permissions import IsFanOrHigher 

class StadiumsListCreateView(generics.ListCreateAPIView):
    queryset = Stadiums.objects.all()
    serializer_class = StadiumSerializers
    permission_classes = [IsFanOrHigher]

class StadiumsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stadiums.objects.all()
    serializer_class = StadiumSerializers
    permission_classes = [IsFanOrHigher]