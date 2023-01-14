from rest_framework.viewsets import ModelViewSet
from mainapp.models import Project, ToDo
from mainapp.serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class ToDoViewset(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
