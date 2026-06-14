from rest_framework import generics
from .serializers import ScoreSerializers
from .models import Scores

class ScoreListCreateApiView (generics.ListCreateAPIView):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializers
    
class ScoreRetrieveDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializers