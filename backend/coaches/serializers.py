from rest_framework import serializers
from .models import Coaches

class CoacheSerializers(serializers.ModelSerializer):
    class Meta :
        model = Coaches
        fields = [
            'coach_id',
            'name',
            'team_id',
            'nationality'
        ]