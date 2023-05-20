from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4


class User(AbstractUser):
    #id = models.UUIDField(default=uuid4, primary_key=True)
    id = models.BigAutoField(primary_key=True)
    email = models.EmailField(blank=True, verbose_name="Email", unique=True)
    age = models.PositiveSmallIntegerField(null=True, blank=True, verbose_name="Возраст")
    avatar = models.ImageField(upload_to="users", blank=True, null=True)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
