from rest_framework.serializers import HyperlinkedModelSerializer, SlugRelatedField
from mainapp.models import Project, ToDo
from authapp.models import User


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = SlugRelatedField(many=True, slug_field='username', queryset=User.objects.all())

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):

    project = SlugRelatedField(slug_field='title', queryset=Project.objects.all())
    user = SlugRelatedField(slug_field='username', queryset=User.objects.all())

    class Meta:
        model = ToDo
        fields = '__all__'