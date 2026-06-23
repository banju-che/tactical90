from rest_framework import generics
from .serializers import CoacheSerializers
from .models import Coaches
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class coachesListCreateView(generics.ListCreateAPIView):
    queryset = Coaches.objects.all()
    serializer_class = CoacheSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class coachesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coaches.objects.all()
    serializer_class = CoacheSerializers
    permission_classes = [IsAuthenticated]