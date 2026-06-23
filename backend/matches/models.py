from django.db import models
from seasons.models import Seasons
from leagues.models import Leagues
from teams.models import Teams

class Matches(models.Model):
    match_id = models.IntegerField(primary_key=True)

    season = models.ForeignKey(
        Seasons,
        db_column='season_id',
        on_delete=models.DO_NOTHING,
        null=True
    )

    league = models.ForeignKey(
        Leagues,
        db_column='league_id',
        on_delete=models.DO_NOTHING,
        null=True
    )

    home_team = models.ForeignKey(
        Teams,
        db_column='home_team_id',
        on_delete=models.DO_NOTHING,
        null=True,
        related_name = 'home_matches'
    )

    away_team = models.ForeignKey(
        Teams,
        db_column='away_team_id',
        on_delete=models.DO_NOTHING,
        null=True,
        related_name = 'away_matches'
    )

    matchday = models.IntegerField(blank=True, null=True)
    winner = models.CharField(max_length=50, blank=True, null=True)
    utc_date = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.home_team} vs {self.away_team}"
    
    class Meta:
        managed = False
        db_table = 'matches'

     