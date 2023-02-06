from django.urls import path
from . import views

urlpatterns = [
    path("contats/", views.ContatsView.as_view()),
    path("contats/<int:contat_id>/", views.ContatsDetailsView.as_view()),
]
