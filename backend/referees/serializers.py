from rest_framework import serializers 
from .models import Referees

class RefereeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Referees 
        fields = [
            'referee_id' ,
            'name' ,
            'nationality'
        ]
        read_only_fields = ['referee_id']