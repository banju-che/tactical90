import django_filters
from .models import Players

class PlayerFilter(django_filters.FilterSet):
    team_name = django_filters.CharFilter(
        field_name="team__name",
        lookup_expr="icontains"
    )

    position = django_filters.CharFilter(
        lookup_expr="icontains"
    )

    class Meta:
        model = Players
        fields = ["team_name", "position"]