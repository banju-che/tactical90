from django.db import models

class Standings(models.Model):
    standing_id = models.IntegerField(primary_key=True)
    season_id = models.IntegerField(blank=True, null=True)
    league_id = models.IntegerField(blank=True, null=True)
    position = models.IntegerField(blank=True, null=True)
    team_id = models.IntegerField(blank=True, null=True)
    played_games = models.IntegerField(blank=True, null=True)
    won = models.IntegerField(blank=True, null=True)
    draw = models.IntegerField(blank=True, null=True)
    lost = models.IntegerField(blank=True, null=True)
    points = models.IntegerField(blank=True, null=True)
    goals_for = models.IntegerField(blank=True, null=True)
    goals_against = models.IntegerField(blank=True, null=True)
    goal_difference = models.IntegerField(blank=True, null=True)
    form = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'standings'

    def __str__(self):
        return self.name or f"Team {self.team_id}"
