from django.db import models
from seasons.models import Seasons
from leagues.models import Leagues

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

    matchday = models.IntegerField(blank=True, null=True)
    home_team_id = models.IntegerField(blank=True, null=True)
    away_team_id = models.IntegerField(blank=True, null=True)
    winner = models.CharField(max_length=50, blank=True, null=True)
    utc_date = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'matches'