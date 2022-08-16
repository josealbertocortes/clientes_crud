from django.urls import path
from .views import get_clients,update_client

urlpatterns = [
    path('clients/',get_clients, name="get-clientes" ),
    path("clients/<str:pk>/",update_client,name="update_client")
]