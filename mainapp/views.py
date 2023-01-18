from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination
from mainapp.models import Project, ToDo
from mainapp.serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectFilter, ToDoFilter


class ProjectPagination(PageNumberPagination):
    page_size = 10


class ToDoPagination(PageNumberPagination):
    page_size = 20


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination
    filterset_class = ProjectFilter


class ToDoViewset(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoPagination
    filterset_class = ToDoFilter
