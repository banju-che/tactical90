from rest_framework import generics
from .serializers import ScoreSerializers
from .models import Scores
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class ScoreListCreateApiView (generics.ListCreateAPIView):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class ScoreRetrieveDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializers
    permission_classes = [IsAuthenticated]