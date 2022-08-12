
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from .models import Clients

#creacion de cliente y obtencion de todos los clientes 
@api_view(["GET","POST"])
def get_clients(request):
    if request.method == 'GET':
        #obtencion de todos los clientes 
        data = Clients.objects.values()
        clients = list(data)
        return Response(clients,status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        #creacion del cliente 
        client_to_create = request.data

        Clients.objects.create(
            name=str(client_to_create["name"]),
            lastname=str(client_to_create["lastname"]),
            telephone=str(client_to_create["telephone"]),
            email=str(client_to_create["email"]),
            age=int(client_to_create["age"]),
            status=str(client_to_create["status"]),
        )
        message = {"detail":"Client created"}
        return Response(message, status=status.HTTP_200_OK)







#actualizacion y obtencion del cliente
@api_view(["PUT","GET"])
def update_client(request,pk):
    if request.method == 'PUT':
        #validacion que el cliente exista 
        try:
            client = Clients.objects.get(pk=int(pk))
        except ObjectDoesNotExist:
            message = {"detail":"client with that pk doesn't no exist"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        #actualizacion de los atributos del cliente 
        data_to_update = request.data

        if data_to_update.get("email") is not None:
            client.email = data_to_update["email"]

        if data_to_update.get("lastname") is not None:
            client.lastname = data_to_update["lastname"]

        if data_to_update.get("telephone") is not None:
            client.telephone = data_to_update["telephone"]

        if data_to_update.get("name") is not None:
            client.name = data_to_update["name"]

        if data_to_update.get("age") is not None:
            client.age = int(data_to_update["age"])

        if data_to_update.get("status") is not None:
            client.status = data_to_update["status"]

        client.save()

        message = {"detail":"client updated"}
        return Response(message,status=status.HTTP_200_OK)


    elif request.method == 'GET':
        #obntencion del cliente 
        client = Clients.objects.filter(pk=int(pk)).values()
        #en caso de que no exista el cliente 
        if not client:
            message = {"detail":"client with that pk doesn't no exist"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        #envio del cliente cuando existe 
        else:
            return Response(client[0], status=status.HTTP_200_OK)