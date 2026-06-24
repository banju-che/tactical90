from rest_framework import generics
from .serializers import CoacheSerializers
from .models import Coaches
from users.permissions import IsFanOrHigher

class coachesListCreateView(generics.ListCreateAPIView):
    queryset = Coaches.objects.all()
    serializer_class = CoacheSerializers
    permission_classes = [IsFanOrHigher]
    
class coachesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coaches.objects.all()
    serializer_class = CoacheSerializers
    permission_classes = [IsFanOrHigher]