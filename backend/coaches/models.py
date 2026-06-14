from django.db import models

class Coaches(models.Model):
    coach_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    team_id = models.IntegerField(blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'coaches'