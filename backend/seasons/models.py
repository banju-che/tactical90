from django.db import models

class Seasons(models.Model):
    season_id = models.IntegerField(primary_key=True)
    league_id = models.IntegerField(blank=True, null=True)
    year = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'seasons'