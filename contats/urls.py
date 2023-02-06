from django.urls import path
from . import views

urlpatterns = [
    path("contats/", views.ContatsListView.as_view()),
]
