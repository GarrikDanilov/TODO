from rest_framework.serializers import HyperlinkedModelSerializer
from mainapp.models import Project, ToDo
from authapp.serializers import UserModelSerializer


class ProjectModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'