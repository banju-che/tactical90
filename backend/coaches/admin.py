from django.contrib import admin
from .models import Coaches 

@admin.register(Coaches)
class CoachAdmin(admin.ModelAdmin):
    list_display = ("coach_id", "name", "team_id", "nationality")
    search_fields = ("name", )

# Register your models here.
