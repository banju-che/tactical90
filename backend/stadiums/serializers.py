from .models import Stadiums 
from rest_framework import serializers

class StadiumSerializers(serializers.ModelSerializer):
    class Meta:
        model = Stadiums
        fields = [
            'stadium_id',
            'name',
            'location',
            'capacity'
        ]
