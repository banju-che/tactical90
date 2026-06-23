from django.contrib import admin
from .models import Scores 

@admin.register(Scores)
class ScoresAdmin(admin.ModelAdmin):
    list_display = (
        "score_id", 
        "match_id", 
        "full_time_home",
        "full_time_away",
        "half_time_home",
        "half_time_away"
    )
