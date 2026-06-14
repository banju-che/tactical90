from rest_frameworks import serializers
from .models import Coaches

class CoacheSerializers(serializers):
    class Meta :
        model = Coaches
        fields = [
            'coach_id',
            'name',
            'team_id',
            'nationality'
        ]