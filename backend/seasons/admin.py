from django.contrib import admin 
from .models import Seasons

@admin.register(Seasons)
class SeasonsAdmin(admin.ModelAdmin):
    list_display = (
        "season_id",
        "league",
        "year"
    )
