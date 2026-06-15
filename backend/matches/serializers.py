from rest_framework import serializers
from .models import Matches

from seasons.models import Seasons
from leagues.models import Leagues
from teams.models   import Teams

from seasons.serializers import SeasonsSerializers
from leagues.serializers import LeaguesSerializer
from teams.serializers   import TeamSerializer

class MatchesSerializers(serializers.ModelSerializer):
    season = SeasonsSerializers(read_only=True)
    league = LeaguesSerializer(read_only=True)
    home_team = TeamSerializer(read_only=True)
    away_team = TeamSerializer(read_only=True)

    class Meta:
        model = Matches
        fields = [
            'match_id',
            'season',
            'league',
            'matchday',
            'home_team',
            'away_team',
            'winner',
            'utc_date'
        ]
