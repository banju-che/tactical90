from django.contrib import admin
from .models import Referees 

@admin.register(Referees)
class RefereesAdmin(admin.ModelAdmin):
    list_display = ("referee_id", "name", "nationality")
    search_fields = ("name", )
    list_filter = ("nationality", )