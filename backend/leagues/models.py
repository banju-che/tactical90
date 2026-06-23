from django.db import models

class Leagues(models.Model):
    league_id = models.IntegerField(primary_key = True)
    name = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    country_id = models.IntegerField(blank=True, null=True)
    icon_url = models.CharField(max_length=50, blank=True, null=True)
    cl_spot = models.IntegerField(blank=True, null=True)
    uel_spot = models.IntegerField(blank=True, null=True)
    relegation_spot = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name
        
    class Meta:
        managed = False
        db_table = 'leagues'