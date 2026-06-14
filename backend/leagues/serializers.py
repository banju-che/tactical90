from rest_framework import serializers 
from .models import Leagues

class LeaguesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leagues
        fields = [
            'league_id',
            'name',
            'country',
            'country_id',
            'icon_url',
            'cl_spot',
            'uel_spot',
            'relegation_spot'
        ]
