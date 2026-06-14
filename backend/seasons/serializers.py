from rest_framework import serializers 
from .models import Seasons

class SeasonsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Seasons
        fields = [
            'season_id',
            'league_id',
            'year'
        ]
        