from django.contrib import admin
from authapp.models import User


@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ["pk", "username", "first_name", "last_name", "email", "is_active", "date_joined"]
    ordering = ["-date_joined"]
