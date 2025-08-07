# BECA - Blog Minimalista para Escritora

Un blog elegante y minimalista creado con Hugo, diseñado específicamente para una escritora multifacética de 25 años que también es pintora, diseñadora de modas y organizadora de eventos.

## Características

- **Diseño altamente responsive** que se adapta perfectamente a móviles, tablets y desktop
- **Paleta de colores elegante** inspirada en tonos rosa coral, crema y dorado
- **Tipografía cuidadosamente seleccionada** con Playfair Display para títulos y Inter para texto
- **Tailwind CSS** para estilos modernos y mantenibles
- **Imágenes libres de copyright** de Unsplash, Pexels y Pixabay
- **Contenido de ejemplo** con 3 historias completas
- **Navegación intuitiva** y experiencia de usuario optimizada

## Estructura del Proyecto

```
BECA/
├── config.toml              # Configuración principal de Hugo
├── content/                 # Contenido del sitio
│   ├── posts/              # Historias y artículos
│   ├── about.md            # Página sobre la autora
│   └── contact.md          # Página de contacto
├── themes/beca-theme/      # Tema personalizado
│   ├── layouts/            # Plantillas HTML
│   ├── static/             # Archivos estáticos
│   └── theme.toml          # Configuración del tema
├── static/                 # Imágenes y recursos
└── public/                 # Sitio generado (listo para deploy)
```

## Instalación y Uso

### Prerrequisitos
- Hugo (versión 0.92.0 o superior)
- Git (opcional, para control de versiones)

### Pasos para usar el blog

1. **Extraer el archivo ZIP**
   ```bash
   unzip BECA-blog.zip
   cd BECA
   ```

2. **Instalar Hugo** (si no está instalado)
   ```bash
   # En Ubuntu/Debian
   sudo apt-get install hugo
   
   # En macOS con Homebrew
   brew install hugo
   
   # En Windows con Chocolatey
   choco install hugo
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   hugo server -D
   ```
   El sitio estará disponible en `http://localhost:1313`

4. **Generar el sitio para producción**
   ```bash
   hugo
   ```
   Los archivos generados estarán en la carpeta `public/`

## Personalización

### Agregar nuevas historias

1. Crear un nuevo archivo en `content/posts/`:
   ```bash
   hugo new posts/mi-nueva-historia.md
   ```

2. Editar el archivo con tu contenido:
   ```markdown
   ---
   title: "Título de tu historia"
   date: 2024-01-30T10:00:00Z
   draft: false
   image: "/images/tu-imagen.jpg"
   category: "Ficción"
   tags: ["tag1", "tag2"]
   summary: "Resumen de tu historia"
   ---
   
   Contenido de tu historia aquí...
   ```

### Cambiar colores y estilos

Los colores principales están definidos en `themes/beca-theme/layouts/_default/baseof.html` en la configuración de Tailwind:

```javascript
colors: {
    'rose-dust': '#F4E4E0',
    'coral-pink': '#E8A598',
    'warm-coral': '#D4756B',
    'soft-cream': '#FDF8F6',
    'golden-accent': '#E6B17A',
    'charcoal': '#2D2D2D'
}
```

### Agregar imágenes

1. Coloca las imágenes en `static/images/`
2. Referéncialas en tu contenido como `/images/nombre-imagen.jpg`

## Deployment

### Netlify (Recomendado)
1. Sube la carpeta `BECA` a un repositorio de GitHub
2. Conecta tu repositorio con Netlify
3. Configura el comando de build: `hugo`
4. Configura el directorio de publicación: `public`

### Vercel
1. Sube la carpeta `BECA` a un repositorio de GitHub
2. Conecta tu repositorio con Vercel
3. Vercel detectará automáticamente que es un proyecto Hugo

### GitHub Pages
1. Sube la carpeta `BECA` a un repositorio de GitHub
2. Configura GitHub Actions para Hugo
3. Los archivos se publicarán automáticamente

## Características Técnicas

- **Framework**: Hugo (Static Site Generator)
- **CSS Framework**: Tailwind CSS (vía CDN)
- **Tipografías**: Google Fonts (Playfair Display + Inter)
- **Responsive Design**: Mobile-first approach
- **SEO**: Meta tags optimizados
- **Performance**: Sitio estático ultra-rápido

## Contenido Incluido

### Historias de Ejemplo
1. **"El Vestido de Luna"** - Una historia sobre el poder transformador de la moda
2. **"La Boda de los Colores"** - Reflexión sobre el amor y las diferencias
3. **"El Lienzo en Blanco"** - Exploración del bloqueo creativo

### Páginas Estáticas
- **Inicio**: Presentación elegante con hero section
- **Historias**: Lista de todas las publicaciones
- **Acerca de**: Información sobre la autora
- **Contacto**: Formulario y información de contacto

## Soporte

Para cualquier duda o personalización adicional, consulta la documentación oficial de Hugo en https://gohugo.io/documentation/

## Licencia

Este tema es de uso libre. Las imágenes incluidas son libres de copyright y provienen de:
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)

---

**¡Disfruta creando contenido hermoso con BECA!** ✨

