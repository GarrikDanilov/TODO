from django.db import models
from authapp.models import User


class Project(models.Model):
    title = models.CharField(max_length=256, unique=True, verbose_name='Название')
    repo = models.URLField(blank=True, null=True, verbose_name='Ссылка на репозиторий')
    users = models.ManyToManyField(User)

    created = models.DateTimeField(auto_now_add=True, editable=False, verbose_name='Дата создания')
    updated = models.DateTimeField(auto_now=True, editable=False, verbose_name='Дата обновления')

    def __str__(self) -> str:
        return self.title


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Проект')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    body = models.TextField(verbose_name='Заметка')

    created = models.DateTimeField(auto_now_add=True, editable=False, verbose_name='Дата создания')
    updated = models.DateTimeField(auto_now=True, editable=False, verbose_name='Дата обновления')
    deleted = models.BooleanField(default=False, verbose_name='Закрыто')

    def delete(self, *args):
        self.deleted = True
        self.save()

    def __str__(self) -> str:
        return f'Заметка по проекту {self.project.title} от пользователя {self.user.username}'
