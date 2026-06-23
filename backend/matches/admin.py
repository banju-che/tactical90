from django.contrib import admin
from .models import Matches 

@admin.register(Matches)
class MatchesAdmin(admin.ModelAdmin):
    list_display = ("match_id", "league", "home_team", "away_team", "matchday", "winner", "utc_date")
    search_fields = ("season", "league")