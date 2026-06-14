from rest_frameworks import generics
from .serializers import coachesSerializers
from .models import Coaches

class coachesListCreateView(generics.ListCreateAPIView):
    queryset = Coaches.objects.all()
    serializers_class = CoachesSerializers
    
class coachesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coaches.objects.all()
    serializers_class = CoachesSerializers