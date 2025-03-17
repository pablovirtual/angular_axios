# Integrador Final Angular - Consumo de API JSONPlaceholder

Este proyecto es una aplicación Angular simple que consume datos de la API JSONPlaceholder, utilizando Axios para realizar peticiones HTTP y Bootstrap (Bootswatch) para el diseño de la interfaz de usuario.

## Descripción del Proyecto

Esta aplicación obtiene una lista de tareas desde la API JSONPlaceholder y las muestra en una tabla interactiva. Las tareas completadas se destacan con un fondo verde, mientras que las tareas pendientes se muestran con indicadores visuales claros.

![Captura de pantalla de la aplicación](screenshot.png)

## Características Principales

- **Consumo de API REST**: Utiliza Axios para obtener datos de JSONPlaceholder
- **Interfaz Responsiva**: Diseño adaptable para diferentes tamaños de pantalla
- **Manejo de Estados**: Incluye estados de carga y errores
- **Indicadores Visuales**: Las tareas completadas y pendientes se distinguen con colores
- **Componente Único**: Implementación en un solo componente para simplicidad

## Tecnologías Utilizadas

- **Angular**: Framework principal (versión 19.2.0)
- **Axios**: Biblioteca para realizar peticiones HTTP
- **Bootswatch**: Tema de Bootstrap para estilos
- **TypeScript**: Lenguaje de programación con tipado estático

## Estructura del Proyecto

Los archivos principales del proyecto son:

- `src/app/app.component.ts`: Contiene la lógica para obtener y manejar los datos
- `src/app/app.component.html`: Plantilla HTML para mostrar los datos
- `src/index.html`: Documento HTML base con la referencia a Bootswatch

## Cómo Ejecutar el Proyecto

1. Clona este repositorio o descarga el código fuente
2. Asegúrate de tener instalado Node.js y Angular CLI
3. Instala las dependencias con `npm install`
4. Ejecuta el servidor de desarrollo con `ng serve`
5. Abre tu navegador en `http://localhost:4200/`

## API Utilizada

Esta aplicación consume datos de la API JSONPlaceholder:
- Endpoint para tareas: `https://jsonplaceholder.typicode.com/todos`

## Desarrollo

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.0.

### Servidor de Desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

### Compilación

Ejecuta `ng build` para compilar el proyecto. Los archivos de compilación se almacenarán en el directorio `dist/`.

---

Proyecto desarrollado como parte del curso de desarrollo web 2025.
