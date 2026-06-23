
from rest_framework import generics
from .models import Stadiums
from .serializers import StadiumSerializers
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class StadiumsListCreateView(generics.ListCreateAPIView):
    queryset = Stadiums.objects.all()
    serializer_class = StadiumSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

class StadiumsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stadiums.objects.all()
    serializer_class = StadiumSerializers
    permission_classes = [IsAuthenticated]