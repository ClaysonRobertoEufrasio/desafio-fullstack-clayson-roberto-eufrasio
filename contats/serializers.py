from rest_framework import serializers
from .models import Contats


class ContatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contats
        fields = [
            "id",
            "name",
            "phone",
            "email",
            "created_at",
        ]
