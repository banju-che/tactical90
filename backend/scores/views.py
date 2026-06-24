from rest_framework import generics
from .serializers import ScoreSerializers
from .models import Scores
from users.permissions import IsFanOrHigher

class ScoreListCreateApiView (generics.ListCreateAPIView):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializers
    permission_classes = [IsFanOrHigher]
    
class ScoreRetrieveDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializers
    permission_classes = [IsFanOrHigher]