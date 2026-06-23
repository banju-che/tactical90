from django.db import models
from seasons.models import Seasons
from teams.models import Teams

class Standings(models.Model):
    standing_id = models.IntegerField(primary_key=True)
    league_id = models.IntegerField(blank=True, null=True)
    position = models.IntegerField(blank=True, null=True)
    played_games = models.IntegerField(blank=True, null=True)
    won = models.IntegerField(blank=True, null=True)
    draw = models.IntegerField(blank=True, null=True)
    lost = models.IntegerField(blank=True, null=True)
    points = models.IntegerField(blank=True, null=True)
    goals_for = models.IntegerField(blank=True, null=True)
    goals_against = models.IntegerField(blank=True, null=True)
    goal_difference = models.IntegerField(blank=True, null=True)
    form = models.CharField(max_length=50, blank=True, null=True)

    
    season = models.ForeignKey(
        Seasons,
        on_delete = models.DO_NOTHING,
        db_column = "season_id",
        blank=True, 
        null=True
    )

    team = models.ForeignKey(
        Teams,
        on_delete = models.DO_NOTHING,
        db_column = "team_id",
        blank=True, 
        null=True
    )

    class Meta:
        managed = False
        db_table = 'standings'

    def __str__(self):
        return self.name 
