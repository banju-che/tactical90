from .models import Players 
from .serializers import PlayersSerializer
from rest_framework import generics
from users.permissions import IsFanOrHigher

class PlayerList(generics.ListCreateAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer
    permission_classes = [IsFanOrHigher]
    
class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer 
    permission_classes = [IsFanOrHigher] 