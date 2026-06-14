from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Teams
from .serializers import TeamSerializer


class TeamListCreateView(generics.ListCreateAPIView):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer


class TeamRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer