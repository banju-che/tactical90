from django.contrib import admin
from .models import Players

@admin.register(Players)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ("player_id", "team", "name", "position", "date_of_birth", "nationality")
    search_fields = ("name",)
