from .models import Customers
from .serializers import CustomersSerializer

from rest_framework import generics


class CustomersView(generics.ListCreateAPIView):

    serializer_class = CustomersSerializer
    queryset = Customers.objects.all()


class CustomersDetailsView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = CustomersSerializer
    queryset = Customers.objects.all()
    lookup_url_kwarg = "customer_id"
