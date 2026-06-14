from rest_framework import serializers 
from .models import Players

class PlayersSerializer(serializers.ModelSerializer):
    model = Players 
    fields = [
        'player_id',
        'team_id',
        'name',
        'position',
        'date_of_birth',
        'nationality'
    ]
   