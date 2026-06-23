from django.db import models
from stadiums.models import Stadiums
from leagues.models import Leagues

class Teams(models.Model):
    team_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    founded_year = models.FloatField(blank=True, null=True)
    cresturl = models.CharField(max_length=50, blank=True, null=True)

    stadium = models.ForeignKey(
        Stadiums,
        on_delete = models.DO_NOTHING,
        db_column = "stadium_id",
        blank=True, 
        null=True
    )

    league = models.ForeignKey(
        Leagues,
        on_delete = models.DO_NOTHING,
        db_column = "league_id",
        blank=True, 
        null=True
    )

    coach = models.ForeignKey(
        "coaches.Coaches",
        on_delete = models.DO_NOTHING,
        db_column = "coach_id",
        blank=True, 
        null=True
    )

    class Meta:
        managed = False
        db_table = 'teams'
        
    def __str__(self):
        return self.name or f"Team {self.team_id}"