from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField
from mainapp.models import Project, ToDo
from authapp.serializers import UserModelSerializer


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user = UserModelSerializer()
    project = StringRelatedField()

    class Meta:
        model = ToDo
        fields = '__all__'