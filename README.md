# Los Simpson Blog

Los Simpson Blog es una aplicación web construida con React, Vite y TypeScript, que consume una API de Los Simpson para mostrar información sobre personajes, episodios y ubicaciones. El proyecto utiliza React Router para la navegación y está preparado para desplegarse en GitHub Pages.


# 🛠 Tecnologías

- React 19 – Biblioteca principal para la interfaz de usuario.
- Vite – Bundler rápido y moderno.
- TypeScript – Tipado estático para mayor seguridad y escalabilidad.
- Tailwind CSS – Estilos utilitarios y diseño responsivo.
- React Router – Manejo de rutas entre secciones.
- gh-pages – Para desplegar la app en GitHub Pages.

## 📂 Estructura del proyecto


```
src
 ┣ assets         # Imágenes y recursos estáticos
 ┣ components     # Componentes reutilizables
 ┃ ┣ cards        # Tarjetas de personajes, episodios y ubicaciones
 ┃ ┣ elements     # Elementos UI: Navbar, Footer, Dropdown
 ┃ ┣ hooks        # Custom hooks para consumir la API
 ┃ ┗ sections     # Secciones de la app: Home, Characters, Episodes, Location
 ┣ libs           # Funciones utilitarias
 ┣ routes         # Rutas y páginas
 ┣ services       # Consumo de la API
 ┣ types          # Tipos TypeScript
 ┣ App.tsx
 ┣ main.tsx
 ┗ index.css
```

# 🚀 Funcionalidades

- Home: Pantalla de bienvenida con imagen de fondo y personajes populares.
- Personajes: Lista completa de personajes con filtros por nombre y categoría.
- Detalle de personaje: Información detallada, incluyendo episodios en los que aparece.
- Episodios: Listado de episodios con detalles de cada uno.
- Ubicaciones: Muestra los lugares icónicos del universo de Los Simpson.
- Diseño responsivo: Compatible con móviles, tablets y escritorio.

# ⚡ Instalación

1. Clonar el repositorio
```
git clone https://github.com/LarandaC/the-simpson-blog.git
cd the-simpson-blog
```
2. Instalar las dependencias
```
npm install
```
4. Levantar la app en modo desarrollo
```
npm run dev
```

# 📦 Build y despliegue

1. Para generar el build de producción:
```
npm run build
```
2. Para desplegar en GitHub Pages:
```
npm run deploy
```


# 🔗 Demo

https://larandac.github.io/the-simpson-blog/

<img width="1920" height="1080" alt="the-simpsons-blog" src="https://github.com/user-attachments/assets/f1c91a88-60a1-4a96-97b8-86c24c8d31b3" />

# 📝 Notas

- La aplicación consume la API de Los Simpson para obtener datos de personajes, episodios y ubicaciones.
- Las imágenes y assets están en src/assets para que Vite los procese correctamente.
- Usa rutas relativas correctas en los imports para evitar errores al generar el build.

