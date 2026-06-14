from django.db import models

class Stadiums(models.Model):
    stadium_id = models.IntegerField(primary_key = True)
    name = models.CharField(max_length=50, blank=True, null=True)
    location = models.CharField(max_length=128, blank=True, null=True)
    capacity = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'stadiums'