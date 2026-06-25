from rest_framework import serializers
from .models import Teams

class TeamSerializer(serializers.ModelSerializer):
    stadium_name = serializers.CharField(
        source="stadium.name",
        read_only=True
    )

    league_name = serializers.CharField(
        source="league.name",
        read_only=True
    )

    coach_name = serializers.CharField(
        source="coach.name",
        read_only=True
    )

    class Meta:
        model = Teams
        fields = [
            "team_id",
            "name",
            "founded_year",
            "cresturl",
            "stadium",
            "stadium_name",
            "league",
            "league_name",
            "coach",
            "coach_name",
        ]