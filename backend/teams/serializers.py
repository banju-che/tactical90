# teams/serializers.py
from rest_framework import serializers
from .models import Teams

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teams
        fields = ['team_id', 'name', 'founded_year', 'stadium_id', 'league_id', 'coach_id', 'cresturl']

