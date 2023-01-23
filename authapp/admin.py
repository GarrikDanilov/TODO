from django.contrib import admin
from authapp.models import User


@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ["pk", "username", "first_name", "last_name", "email", "is_active", "get_groups_names", "date_joined"]
    ordering = ["-date_joined"]

    def get_groups_names(self, obj):
        return ', '.join([item.name for item in obj.groups.all()])

    get_groups_names.short_description = 'Группы'
