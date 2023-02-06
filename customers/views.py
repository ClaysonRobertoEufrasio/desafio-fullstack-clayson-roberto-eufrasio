from .models import Customers
from .serializers import CustomersSerializer

from rest_framework import generics


class CustomersListView(generics.ListCreateAPIView):

    serializer_class = CustomersSerializer
    queryset = Customers.objects.all()
