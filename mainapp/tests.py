import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase
from authapp.models import User
from mixer.backend.django import mixer
from .models import Project, ToDo
from .views import ProjectViewSet


class TestProjectViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):
        project = mixer.blend(Project)
        client = APIClient()
        response = client.get(f'/api/projects/{project.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestToDoViewSet(APITestCase):
    def test_get_detail(self):
        todo = mixer.blend(ToDo)
        response = self.client.get(f'/api/todo/{todo.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestAdminProjectViewSet(APITestCase):
    def test_edit_admin(self):
        project = mixer.blend(Project)
        User.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        response = self.client.post('/api-token-auth/', {'username': 'admin', 'password': 'admin'})
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {response.data["token"]}')
        response = self.client.patch(f'/api/projects/{project.pk}/', {'title': 'Project_by_Test'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project_edited = Project.objects.get(pk=project.pk)
        self.assertEqual(project_edited.title, 'Project_by_Test')
