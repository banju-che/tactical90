# teams/serializers.py
from rest_framework import serializers
from .models import Standings

class StandingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standings
        fields = [
            'standing_id',
            'season_id',
            'league_id',
            'position',
            'team_id',
            'played_games',
            'won',
            'draw',
            'lost',
            'points',
            'goals_for',
            'goals_against',
            'goal_difference',
            'form'
            ]
