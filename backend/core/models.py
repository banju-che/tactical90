# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Coaches(models.Model):
    coach_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    team_id = models.IntegerField(blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'coaches'


class Leagues(models.Model):
    league_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    country_id = models.IntegerField(blank=True, null=True)
    icon_url = models.CharField(max_length=50, blank=True, null=True)
    cl_spot = models.IntegerField(blank=True, null=True)
    uel_spot = models.IntegerField(blank=True, null=True)
    relegation_spot = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'leagues'


class Matches(models.Model):
    match_id = models.IntegerField(blank=True, null=True)
    season_id = models.IntegerField(blank=True, null=True)
    league_id = models.IntegerField(blank=True, null=True)
    matchday = models.IntegerField(blank=True, null=True)
    home_team_id = models.IntegerField(blank=True, null=True)
    away_team_id = models.IntegerField(blank=True, null=True)
    winner = models.CharField(max_length=50, blank=True, null=True)
    utc_date = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'matches'


class Players(models.Model):
    player_id = models.IntegerField(blank=True, null=True)
    team_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    position = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth = models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'players'


class Referees(models.Model):
    referee_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'referees'


class Scores(models.Model):
    score_id = models.IntegerField(blank=True, null=True)
    match_id = models.IntegerField(blank=True, null=True)
    full_time_home = models.IntegerField(blank=True, null=True)
    full_time_away = models.IntegerField(blank=True, null=True)
    half_time_home = models.IntegerField(blank=True, null=True)
    half_time_away = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'scores'


class Seasons(models.Model):
    season_id = models.IntegerField(blank=True, null=True)
    league_id = models.IntegerField(blank=True, null=True)
    year = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'seasons'


class Stadiums(models.Model):
    stadium_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    location = models.CharField(max_length=128, blank=True, null=True)
    capacity = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'stadiums'


class Standings(models.Model):
    standing_id = models.IntegerField(blank=True, null=True)
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


class Teams(models.Model):
    team_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    founded_year = models.FloatField(blank=True, null=True)
    stadium_id = models.IntegerField(blank=True, null=True)
    league_id = models.IntegerField(blank=True, null=True)
    coach_id = models.IntegerField(blank=True, null=True)
    cresturl = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'teams'
