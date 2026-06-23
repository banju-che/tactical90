from django.db import models
from leagues.models import Leagues

class Seasons(models.Model):
    season_id = models.IntegerField(primary_key=True)
    year = models.CharField(max_length=50, blank=True, null=True)

    league = models.ForeignKey(
        Leagues,
        on_delete = models.DO_NOTHING,
        db_column = "league_id",
        blank=True, 
        null=True
    )

    class Meta:
        managed = False
        db_table = 'seasons'

    def __str__(self):
        return self.year