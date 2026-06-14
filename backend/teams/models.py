from django.db import models

class Teams(models.Model):
    team_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    founded_year = models.FloatField(blank=True, null=True)
    stadium_id = models.IntegerField(blank=True, null=True)
    league_id = models.IntegerField(blank=True, null=True)
    coach_id = models.IntegerField(blank=True, null=True)
    cresturl = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'teams'
        
    def __str__(self):
        return self.name or f"Team {self.team_id}"