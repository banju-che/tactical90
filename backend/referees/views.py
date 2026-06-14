from .models import Referees
from .serializers import RefereeSerializers 
from rest_framework import generics

class RefereesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Referees.objects.all()
    serializer_class = RefereeSerializers 

class RefereesRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Referees.objects.all()
    serializer_class = RefereeSerializers