from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins
from authapp.models import User
from authapp.serializers import UserModelSerializer, UserModelSerializerStaff


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, 
                           mixins.UpdateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.1':
            return UserModelSerializerStaff
        return UserModelSerializer
