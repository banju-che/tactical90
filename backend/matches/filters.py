from django_filters import rest_framework as filters
from .models import Matches


class MatchesFilter(filters.FilterSet):

    season = filters.CharFilter(
        field_name="season__name",
        lookup_expr="icontains"
    )

    league = filters.CharFilter(
        field_name="league__name",
        lookup_expr="icontains"
    )

    matchday = filters.NumberFilter()

    class Meta:
        model = Matches
        fields = ["season", "league", "matchday"]