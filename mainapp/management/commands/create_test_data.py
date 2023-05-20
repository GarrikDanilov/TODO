from django.core.management.base import BaseCommand
from authapp.models import User
from mainapp.models import Project, ToDo


class Command(BaseCommand):
    def handle(self, *args, **options):
        user1 = User.objects.create(username='user1', first_name='Ivan', 
                                    last_name='Ivanov', email='user1@user.com', age=30)
        user2 = User.objects.create(username='user2', first_name='Petr', 
                                    last_name='Petrov', email='user2@user.com', age=25)
        
        project1 = Project.objects.create(title='Project1')
        project1.users.add(user1)
        project1.users.add(user2)
        project1.save()
        project2 = Project.objects.create(title='Project2')
        project2.users.add(user2)
        project2.save()

        todo = ToDo.objects.create(project=project1, user=user1, body='todo1')
        