from django.db import models

class Scores(models.Model):
    score_id = models.IntegerField(primary_key= True)
    match_id = models.IntegerField(blank=True, null=True)
    full_time_home = models.IntegerField(blank=True, null=True)
    full_time_away = models.IntegerField(blank=True, null=True)
    half_time_home = models.IntegerField(blank=True, null=True)
    half_time_away = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'scores'