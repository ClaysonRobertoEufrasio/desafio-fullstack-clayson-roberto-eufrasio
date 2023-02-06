from rest_framework import serializers
from .models import Customers


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = [
            "id",
            "name",
            "phone",
            "email",
            "created_at",
        ]
