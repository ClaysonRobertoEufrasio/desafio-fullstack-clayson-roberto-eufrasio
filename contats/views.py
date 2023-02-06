from .models import Contats
from .serializers import ContatsSerializer

from rest_framework import generics


class ContatsListView(generics.ListCreateAPIView):

    serializer_class = ContatsSerializer
    queryset = Contats.objects.all()
