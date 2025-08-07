# BECA - Blog Minimalista para Escritora

Un blog elegante y minimalista creado con Hugo, diseñado específicamente para Elena, una escritora multifacética de 25 años que también es pintora, diseñadora de modas y organizadora de eventos.

## Características

- ✨ **Diseño altamente responsive** que se adapta perfectamente a móviles, tablets y desktop
- 🎨 **Paleta de colores pastel** en tonos rosa coral, arena y crema suaves
- 📝 **Flujo de trabajo optimizado** para escritoras - crea posts rápidamente en Markdown
- 🎭 **Tipografía elegante** con Playfair Display para títulos e Inter para texto
- ⚡ **Hugo + Tailwind CSS** para rendimiento y mantenibilidad
- 📱 **Completamente responsive** con micro-interacciones elegantes
- 🖼️ **Sistema de imágenes local** - todas las imágenes se almacenan en el proyecto

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

1. **Clonar o descargar el proyecto**
   ```bash
   cd BECA
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:1313`

4. **Generar el sitio para producción**
   ```bash
   npm run build
   ```
   Los archivos generados estarán en la carpeta `public/`

## Flujo de Trabajo para Escritoras

### Crear una nueva historia rápidamente

```bash
npm run new
```

Este comando te guiará paso a paso para crear un nuevo post con toda la metadata necesaria.

### Escribir en modo borrador

```bash
npm run draft
```

Esto inicia el servidor con borradores visibles y recarga automática cuando guardas cambios.

## Personalización

### Agregar nuevas historias

1. **Método rápido** (recomendado):
   ```bash
   npm run new
   ```

2. **Método manual**:
   Crear archivo en `content/posts/mi-historia.md`:
   ```markdown
   ---
   title: "Título de tu historia"
   date: 2025-01-30T10:00:00Z
   draft: false
   image: "/images/tu-imagen.jpg"
   category: "Relato"
   tags: ["escritura", "creatividad"]
   summary: "Resumen de tu historia"
   ---
   
   Contenido de tu historia aquí...
   ```

### Agregar imágenes

1. Coloca las imágenes en `static/images/`
2. Referéncialas en tu contenido como `/images/nombre-imagen.jpg`
3. Formatos recomendados: JPG, PNG, WebP
4. Tamaño recomendado: 1200x800px para imágenes principales

### Personalizar colores

Los colores están definidos en `themes/beca-theme/layouts/_default/baseof.html`:

```javascript
colors: {
    'rose-dust': '#F5E6E8',      // Rosa polvo suave
    'coral-pink': '#F4C2C2',     // Rosa coral pastel
    'warm-coral': '#E8B4B8',     // Coral cálido
    'soft-cream': '#FEF7F0',     // Crema suave
    'golden-accent': '#F0D5A8',  // Dorado arena
    'sand-pastel': '#F5F0E8',    // Arena pastel
    'charcoal': '#2D2D2D'
}
```

## Tipos de Contenido

### Categorías Sugeridas
- **Relato**: Historias cortas de ficción
- **Cuento**: Narrativas más largas
- **Blog**: Reflexiones personales
- **Consejo**: Tips sobre arte, moda, eventos
- **Inspiración**: Pensamientos creativos

### Tags Recomendados
- `escritura`, `creatividad`, `arte`, `moda`, `eventos`, `bodas`
- `inspiración`, `consejos`, `reflexión`, `ficción`, `personal`
- `diseño`, `pintura`, `storytelling`, `emprendimiento`

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
- **CSS Framework**: Tailwind CSS (vía CDN) con configuración personalizada
- **Tipografías**: Google Fonts (Playfair Display + Inter)
- **Responsive Design**: Mobile-first con breakpoints optimizados
- **SEO**: Meta tags optimizados para redes sociales
- **Performance**: Sitio estático ultra-rápido con imágenes optimizadas
- **Workflow**: Scripts automatizados para crear contenido

## Comandos Útiles

```bash
# Crear nueva historia (interactivo)
npm run new

# Servidor de desarrollo (incluye borradores)
npm run draft

# Servidor de desarrollo (solo publicados)
npm run dev

# Construir para producción
npm run build

# Vista previa del sitio construido
npm run preview
```

## Soporte

- 📚 [Documentación de Hugo](https://gohugo.io/documentation/)
- 🎨 [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- ✍️ [Sintaxis de Markdown](https://www.markdownguide.org/basic-syntax/)

## Licencia

Este tema es de uso libre para proyectos personales.

---

**¡Disfruta escribiendo y compartiendo tus historias con BECA!** ✨📝