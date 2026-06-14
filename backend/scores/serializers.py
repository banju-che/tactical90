from rest_framework import serializers
from .models import Scores

class ScoreSerializers(serializers.ModelSerializer):
    class Meta:
        model = Scores
        fields = [
            'score_id',
            'match_id',
            'full_time_home',
            'full_time_away',
            'half_time_home',
            'half_time_away'
        ]

        read_only_fields = [
            'score_id'
            ]
        