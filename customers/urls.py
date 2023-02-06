from django.urls import path
from . import views

urlpatterns = [
    path("customers/", views.CustomersView.as_view()),
    path("customers/<int:customer_id>/", views.CustomersDetailsView.as_view()),
]
