# Evaluacion

### Prerequisitos

Tener instalado docker y node

### Entrar a la carpeta django-mysql

En una terminal ejecutar el siguiente comando

`docker-compose build`

Una  vez terminado ejecutar el siguiente comando 

`docker-compose up -d`

Para corroborar que el proceso haya finalizado de manera adecuada ejecutar el siguiente comando 

`docker logs django-mysql_mysql_1`

hasta recibir una respuesta como la siguiente podremos continuar 

    2022-08-16T00:00:05.544503Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
    2022-08-16T00:00:05.698997Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
    2022-08-16T00:00:05.760546Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
    2022-08-16T00:00:05.760639Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.30'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.

Una vez obtenida la respuesta anterior ejecutar el sigueinte comand 

`docker restart django-mysql_web_1`

##### Ejecutar las migraciones 

Para ejecutar las migraciones dentro del contenedor realizaremos los siguientes comandos 

`docker exec -t -i django-mysql_web_1 /bin/bash`


`cd backend/`

`python manage.py makemigrations clients`

`python manage.py migrate `

Una vez terminado el proceso de las migraciones podemos cerrarla terminal 


### Paso 2 Instalar dependecias del front

Abrir una terminal y ejecutar lo sigueintes comandos

`cd frontend`

`npm install`

### Paso 6 Ejecutar el front

Ejecutar lo sigueintes comandos

`npm start`



### Notas 
Se pueden cambiar las variables de entoro en el documento de docker-compose que se encuentra en 
django-mysql/docker-compose.yml, recordar que deben tener lo mismos valores para el servicio web y el de base de deatos 

- MYSQL_ROOT_PASSWORD=S3cret
- MYSQL_PASSWORD=abc123qwe
- MYSQL_USER=client
- MYSQL_DATABASE=backdata
- SECRET_KET=ASDD1245FSADF1Q235HYSUFQ8GA4Y6

