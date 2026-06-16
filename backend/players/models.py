from django.db import models
from teams.models import Teams

class Players(models.Model):
    player_id = models.IntegerField(primary_key= True)

    team = models.ForeignKey(
        Teams,
        db_column='team_id',
        on_delete=models.DO_NOTHING,
        null=True
    )
    
    name = models.CharField(max_length=50, blank=True, null=True)
    position = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth = models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'players'
