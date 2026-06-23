from django.contrib import admin
from .models import Leagues

@admin.register(Leagues)
class LeagueAdmin(admin.ModelAdmin):
    list_display = ("league_id", "name", "country")
    search_fields = ("name",)