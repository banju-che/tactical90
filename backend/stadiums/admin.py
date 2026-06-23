from django.contrib import admin
from .models import Stadiums 

@admin.register(Stadiums) 
class StadiumAdmin(admin.ModelAdmin):
    list_display = ("stadium_id", "name", "location", "capacity")
    search_fields = ("name", )
    