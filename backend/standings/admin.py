from django.contrib import admin
from .models import Standings 

@admin.register(Standings)
class StandingAdmin(admin.ModelAdmin):
    list_display = (
        "standing_id", 
        "season", 
        "league_id",
        "position",
        "team",
        "played_games",
        "won",
        "draw",
        "lost",
        "points",
        "goals_for",
        "goals_against",
        "goal_difference",
        "form"
    )
