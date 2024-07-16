# Prueba técnica Elektra

## Requisitos previos

- Docker
- Docker Compose

## Configuración y ejecución

1. Clona el repositorio y cambia al directorio clonado.

```
git clone https://github.com/dpalominom/prueba-tecnica-elektra.git
cd prueba-tecnica-elektra
```

2. Construye y ejecuta el compose de Docker para generar los contenedores necesarios:

```
docker-compose up --build
```

La API estará disponible en `http://localhost:3000`.

## Endpoints y pruebas

### 1. Registro de usuario

- **URL**: `/api/v1/users/register`
- **Método**: POST
- **Cuerpo de la solicitud**:
```json
{
 "nombre": "Daniel",
 "apellidoPaterno": "Palomino",
 "apellidoMaterno": "Contratenme",
 "telefono": "5566778776",
 "correo": "daniel.palomino@example.com",
 "nombreUsuario": "dpalominom",
 "password": "please123"
}
```

### 2. Login

- **URL**: `/api/v1/auth/login`
- **Método**: POST
- **Cuerpo de la solicitud**:
```json
{
 "identifier": "dpalominom",
 "password": "please123"
}
```

### 3. Consulta de usuarios

- **URL**: `/api/v1/users`
- **Método**: GET
- **Cuerpo de la solicitud**: `x-token: Token obtenido del login`

### 4. Logout

- **URL**: `api/v1/auth/logout`
- **Método**: GET

Hecho con <3 por Daniel Palomino, espero sea de su agrado ya que me encanta construir cosas que la gente ame. Saludos!!
