from .models import Contats
from .serializers import ContatsSerializer

from rest_framework import generics


class ContatsView(generics.ListCreateAPIView):

    serializer_class = ContatsSerializer
    queryset = Contats.objects.all()


class ContatsDetailsView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = ContatsSerializer
    queryset = Contats
    lookup_url_kwarg = "contat_id"
