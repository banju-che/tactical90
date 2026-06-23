from django.db import models
from matches.models import Matches

class Scores(models.Model):
    score_id = models.IntegerField(primary_key= True)
    full_time_home = models.IntegerField(blank=True, null=True)
    full_time_away = models.IntegerField(blank=True, null=True)
    half_time_home = models.IntegerField(blank=True, null=True)
    half_time_away = models.IntegerField(blank=True, null=True)

    match_id = models.ForeignKey(
        Matches,
        on_delete = models.DO_NOTHING,
        db_column = "match_id",
        blank=True, 
        null=True
        )

    class Meta:
        managed = False
        db_table = 'scores'