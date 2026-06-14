from rest_framework import serializers
from .models import Matches

from seasons.models import Seasons
from leagues.models import Leagues

from seasons.serializers import SeasonsSerializers
from leagues.serializers import LeaguesSerializer

class MatchesSerializers(serializers.ModelSerializer):
    season = SeasonsSerializers(read_only=True)
    league = LeaguesSerializer(read_only=True)

    class Meta:
        model = Matches
        fields = [
            'match_id',
            'season',
            'league',
            'matchday',
            'home_team_id',
            'away_team_id',
            'winner',
            'utc_date'
        ]

    