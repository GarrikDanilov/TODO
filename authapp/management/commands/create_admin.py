from typing import Any, Optional
from django.core.management.base import BaseCommand
from authapp.models import User


class Command(BaseCommand):
    def handle(self, *args: Any, **options: Any):
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123')
        