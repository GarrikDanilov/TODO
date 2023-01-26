from django_filters import rest_framework as filters
from .models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['title']


class ToDoFilter(filters.FilterSet):
    created = filters.DateFromToRangeFilter()
    class Meta:
        model = ToDo
        fields = ['project', 'created']