from django.contrib import admin
from mainapp.models import Project, ToDo


@admin.register(Project)
class CustomProjectAdmin(admin.ModelAdmin):
    list_display = ["pk", "title", "get_users_username", "created", "updated", "repo"]
    ordering = ["-created"]

    def get_users_username(self, obj):
        return ', '.join([item.username for item in obj.users.all()])

    get_users_username.short_description = 'Пользователи'


@admin.register(ToDo)
class CustomToDoAdmin(admin.ModelAdmin):
    list_display = ["pk", "get_project_title", "get_user_username", "body", "created", "updated", "deleted"]
    ordering = ["-created"]

    def get_project_title(self, obj):
        return obj.project.title

    def get_user_username(self, obj):
        return obj.user.username

    get_project_title.short_description = 'Проект'

    get_user_username.short_description = 'Пользователь'
