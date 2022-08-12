# Evaluacion

### Prerequisitos

Para seguir correctamente los pasos, es recomendable realizar la prueba en un sistema UNIX

Django maneja un ORM, la configuracion a la base de datos para una prueba rápida se puede usar sqlite

Se dejara el ejemplo por si se desea realizar la conexión a la base de datos mysql 

Si se desea trabajar con mysql, por favor realizar este paso antes del paso 4

Tener instalado virtualenv o un manejor de ambite virtual 

### Paso 1 Crear un ambiente virtual

En una terminal ejecutar el siguiente comando

`virtualenv env`

### Paso 2 Activar el ambiente virutal

En una terminal ejecutar el siguiente comando

`source env/bin/activate`

### Paso 3 Instalar dependencias

Una vez que el ambiente este activado ejecutar el siguiente comando

`pip install -r requirements.txt`

### Paso 4 ejecutar el back

En la misma  terminal ejecutar los siguientes comandos, para correr el back

`cd backend`

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver`

### Paso 5 Instalar dependecias del front

Abrir una terminal y ejecutar lo sigueintes comandos

`cd frontend`

`npm install`

### Paso 6 Ejecutar el front

Ejecutar lo sigueintes comandos

`npm start`



### Conexión con mysql

Es necesario tener instalado en la maquina mysql o una conexión externa 
Si se desea trabajar con mysql, por favor realizar este paso antes del paso 4

instalar la siguiente dependencia

`pip install mysqlclient`

En el archivo de backend/backend/setting.py cambiar el siguiente codigo

    Anterior
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

    Nuevo
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'databaseName',
            'USER': 'databaseUser',
            'PASSWORD': 'databasePassword',
            'HOST': 'localhost',
            'PORT': 'portNumber',
        }
    }

|   NAME |  Esta clave almacena el nombre de su base de datos MySQL. |
| ------------ | ------------ |
| USER | 	Esta clave almacena el nombre de usuario de su cuenta MySQL mediante el cual se conectará la base de datos MySQL. |
|PASSWORD   |  	Esta clave almacena la contraseña de esa cuenta MySQL. |
|HOST| 	Esta clave almacena la dirección IP en la que está alojada su base de datos MySQL.  |
|  PORT | 	Esta clave almacena el número de puerto en el que está alojada su base de datos MySQL.  |


### Notas

las urls que se pueden visitar es:

http://localhost:3000 Se encuentra el listado de clientes, se pueden agregar clientes y editar los existentes

Se agregan una coleción  de pruebas en postman para la api