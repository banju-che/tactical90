from django.contrib import admin
from django.urls import path, include 
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView )

urlpatterns = [

    #Authentification 
    path("api/token/",          TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/",  TokenRefreshView.as_view(), name="token_refresh"),
    path("api/users/",          include("users.urls")),

    #admin
    path('admin/',          admin.site.urls),

    path('api/teams/',      include('teams.urls')),
    path('api/standings/',  include('standings.urls')),
    path('api/stadiums/',   include('stadiums.urls')),
    path('api/coaches/',    include('coaches.urls')),
    path('api/matches/',    include('matches.urls')),
    path('api/leagues/',    include('leagues.urls')),
    path('api/seasons/',    include('seasons.urls')),
    path('api/scores/',     include('scores.urls')),
    path('api/referees/',   include('referees.urls')),
    path('api/players/',    include('players.urls'))
]
