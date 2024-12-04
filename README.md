# url-shortener-frontend

Aplicación para acortar URL's

## Tecnologías principales

- React 18.x
- shadcn/ui (https://ui.shadcn.com/)

## Ejecución local

- Crear el archivo `.env.local`. Luego, copiar el contenido del archivo `.env.example`. Editar las variables de acuerdo a las URL's requeridas.
- Instalar el gestor de paquetes `pnpm` (`npm install -g pnpm`) y luego ejecutar el comando `pnpm install` para instalar las dependencias del proyecto.
- Ejecutar el comando `pnpm run dev` para levantar el proyecto. Recordar tener levantado el proyecto `url-shortener-backend` en local.

## Despliegue

- Crear un archivo `.env.{entorno}` para el entorno que se desee: `(testing | production)`.
- Ejecutar el comandando `pnpm run build:dev` para _testing_ y `pnpm run build:prod` para _production_.
- Crear una cuenta en Firebase y crear un proyecto nuevo por cada ambiente. Luego configurar Firebase CLI en su equipo de acuerdo a su documentación oficial (https://firebase.google.com/docs/cli).
- Ejecutar el comando `firebase login` para iniciar sesión con la CLI.
- Ejecutar el comando `firebase deploy` para desplegar el contenido generado en la carpeta `dist`.


## Versión actual en producción

Link: https://url-shortener-af159.web.app/