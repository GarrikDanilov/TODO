from rest_framework.serializers import HyperlinkedModelSerializer
from authapp.models import User


class UserModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email'
        )


class UserModelSerializerStaff(HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_superuser'
        )
        