from .models import Referees
from .serializers import RefereeSerializers 
from rest_framework import generics
from users.permissions import IsFanOrHigher

class RefereesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Referees.objects.all()
    serializer_class = RefereeSerializers 
    permission_classes = [IsFanOrHigher]

class RefereesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Referees.objects.all()
    serializer_class = RefereeSerializers
    permission_classes = [IsFanOrHigher]