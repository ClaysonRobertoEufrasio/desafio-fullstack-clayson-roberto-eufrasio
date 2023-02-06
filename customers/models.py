from django.db import models


class Customers(models.Model):
    name = models.CharField(max_length=150)
    phone = models.IntegerField()
    email = models.EmailField(max_length=200, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
