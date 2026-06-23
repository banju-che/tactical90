from .models import Players 
from .serializers import PlayersSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

class PlayerList(generics.ListCreateAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer 
    permission_classes = [IsAuthenticated] 