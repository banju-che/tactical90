from .models import Referees
from .serializers import RefereeSerializers 
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class RefereesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Referees.objects.all()
    serializer_class = RefereeSerializers 
    permission_classes = [IsAuthenticatedOrReadOnly]

class RefereesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Referees.objects.all()
    serializer_class = RefereeSerializers
    permission_classes = [IsAuthenticated]