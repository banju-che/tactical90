from .models import Players 
from .serializers import PlayersSerializer
from rest_framework import generics

class PlayerList(generics.ListCreateAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer
    
class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer  