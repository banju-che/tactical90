from django.db import models

class Players(models.Model):
    player_id = models.IntegerField(primary_key= True)
    team_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    position = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth = models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'players'
