from rest_framework import generics
from users.permissions import IsFanOrHigher

from .models import Teams
from .serializers import TeamSerializer


class TeamListCreateView(generics.ListCreateAPIView):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [IsFanOrHigher]


class TeamRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [IsFanOrHigher]