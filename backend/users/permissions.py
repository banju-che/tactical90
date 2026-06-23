from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsFanOrHigher(BasePermission):

    def has_permission(self, request, view):

        # Allow anyone to read
        if request.method in SAFE_METHODS:
            return True

        # For write operations, user must be authenticated
        if not request.user or not request.user.is_authenticated:
            return False

        user = request.user

        if user.groups.filter(name="Administrators").exists() or user.is_superuser:
            return True

        if user.groups.filter(name="Data Managers").exists():
            return request.method in ["POST", "PUT", "PATCH"]

        return False