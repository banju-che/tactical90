from rest_framework import serializers
from .models import Players

class PlayersSerializer(serializers.ModelSerializer):
    team_name = serializers.CharField(
        source="team.name",
        read_only=True
    )

    team_logo = serializers.CharField(
        source="team.cresturl",
        read_only=True
    )

    class Meta:
        model = Players
        fields = [
            "player_id",
            "name",
            "team_name",
            "team_logo",
            "position",
            "date_of_birth",
            "nationality",
        ]