from django.db import models

class Coaches(models.Model):
    coach_id = models.IntegerField(primary_key= True)
    name = models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    team_id = models.ForeignKey(
        "teams.Teams",
        on_delete=models.DO_NOTHING,
        blank=True,
        null=True,
        db_column="team_id"   
    )

    class Meta:
        managed = False
        db_table = 'coaches'

    def __str__(self):
        return self.name 