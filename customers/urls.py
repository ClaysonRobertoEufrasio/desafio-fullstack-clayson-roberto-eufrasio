from django.urls import path
from . import views

urlpatterns = [
    path("customers/", views.CustomersListView.as_view()),
]
