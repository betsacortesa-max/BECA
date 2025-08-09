# BECA - Blog Minimalista para Escritora (Astro)

Un blog elegante y minimalista creado con Astro, diseñado específicamente para Betsabe, una escritora multifacética de 25 años que también es pintora, diseñadora de modas y organizadora de eventos.

## Características

- ✨ **Diseño altamente responsive** que se adapta perfectamente a móviles, tablets y desktop
- 🎨 **Paleta de colores pastel** en tonos rosa coral, arena y crema suaves
- 📝 **Flujo de trabajo optimizado** para escritoras - crea posts rápidamente en Markdown
- 🎭 **Tipografía elegante** con Playfair Display para títulos e Inter para texto
- ⚡ **Astro + Tailwind CSS** para rendimiento ultra-rápido y mantenibilidad
- 📱 **Completamente responsive** con micro-interacciones elegantes
- 🖼️ **Imágenes optimizadas** desde Pexels con carga rápida
- 🚀 **SEO optimizado** con meta tags y sitemap automático

## Estructura del Proyecto

```
BECA/
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs      # Configuración de Tailwind
├── src/
│   ├── layouts/             # Layouts base
│   ├── components/          # Componentes reutilizables
│   ├── pages/               # Páginas y posts
│   │   ├── posts/          # Historias en Markdown
│   │   ├── about.astro     # Página sobre la autora
│   │   └── contact.astro   # Página de contacto
├── scripts/                 # Scripts de utilidad
└── dist/                   # Sitio generado (listo para deploy)
```

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para usar el blog

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`

3. **Generar el sitio para producción**
   ```bash
   npm run build
   ```
   Los archivos generados estarán en la carpeta `dist/`

4. **Vista previa del sitio construido**
   ```bash
   npm run preview
   ```

## Flujo de Trabajo para Escritoras

### Crear una nueva historia rápidamente

```bash
npm run new
```

Este comando te guiará paso a paso para crear un nuevo post con toda la metadata necesaria.

### Agregar nuevas historias

1. **Método rápido** (recomendado):
   ```bash
   npm run new
   ```

2. **Método manual**:
   Crear archivo en `src/pages/posts/mi-historia.md`:
   ```markdown
   ---
   title: "Título de tu historia"
   date: 2025-01-30T10:00:00Z
   draft: false
   image: "https://images.pexels.com/photos/tu-imagen-id/pexels-photo-tu-imagen-id.jpeg?auto=compress&cs=tinysrgb&w=800"
   category: "Relato"
   tags: ["escritura", "creatividad"]
   summary: "Resumen de tu historia"
   ---
   
   Contenido de tu historia aquí...
   ```

### Usar imágenes de Pexels

1. Busca imágenes apropiadas en [Pexels](https://www.pexels.com)
2. Copia la URL de la imagen con parámetros de optimización
3. Formato recomendado: `?auto=compress&cs=tinysrgb&w=800`
4. Úsala en el frontmatter de tu post

### Personalizar colores

Los colores están definidos en `tailwind.config.mjs`:

```javascript
colors: {
  'rose-dust': '#F5E6E8',      // Rosa polvo suave
  'coral-pink': '#F4C2C2',     // Rosa coral pastel
  'warm-coral': '#E8B4B8',     // Coral cálido
  'soft-cream': '#FEF7F0',     // Crema suave
  'golden-accent': '#F0D5A8',  // Dorado arena
  'sand-pastel': '#F5F0E8',    // Arena pastel
  'charcoal': '#2D2D2D'        // Carbón
}
```

## Tipos de Contenido

### Categorías Sugeridas
- **Relato**: Historias cortas de ficción
- **Cuento**: Narrativas más largas
- **Blog**: Reflexiones personales
- **Consejo**: Tips sobre arte, moda, eventos
- **Inspiración**: Pensamientos creativos
- **Reflexión**: Introspecciones profundas
- **Ficción**: Historias imaginativas

### Tags Recomendados
- `escritura`, `creatividad`, `arte`, `moda`, `eventos`, `bodas`
- `inspiración`, `consejos`, `reflexión`, `ficción`, `personal`
- `diseño`, `pintura`, `storytelling`, `emprendimiento`

## Deployment

### Netlify (Recomendado)
1. Conecta tu repositorio con Netlify
2. Comando de build: `npm run build`
3. Directorio de publicación: `dist`
4. El archivo `netlify.toml` ya está configurado

### Vercel
1. Conecta tu repositorio con Vercel
2. Vercel detectará automáticamente que es un proyecto Astro

### GitHub Pages
1. Configura GitHub Actions para Astro
2. Los archivos se publicarán automáticamente

## Características Técnicas

- **Framework**: Astro (Static Site Generator)
- **CSS Framework**: Tailwind CSS con configuración personalizada
- **Tipografías**: Google Fonts (Playfair Display + Inter)
- **Responsive Design**: Mobile-first con breakpoints optimizados
- **SEO**: Meta tags optimizados para redes sociales
- **Performance**: Sitio estático ultra-rápido con imágenes optimizadas
- **Workflow**: Scripts automatizados para crear contenido

## Comandos Útiles

```bash
# Crear nueva historia (interactivo)
npm run new

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del sitio construido
npm run preview

# Verificar el proyecto
npm run astro check
```

## Ventajas de Astro

- **Rendimiento excepcional**: Carga ultra-rápida con JavaScript mínimo
- **SEO optimizado**: Generación estática con meta tags automáticos
- **Desarrollo moderno**: Componentes reutilizables y TypeScript opcional
- **Flexibilidad**: Fácil integración con cualquier framework si es necesario
- **Mantenimiento simple**: Estructura clara y código limpio

## Soporte

- 📚 [Documentación de Astro](https://docs.astro.build/)
- 🎨 [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- ✍️ [Sintaxis de Markdown](https://www.markdownguide.org/basic-syntax/)
- 🖼️ [Pexels para imágenes](https://www.pexels.com/)

## Licencia

Este tema es de uso libre para proyectos personales.

---

**¡Disfruta escribiendo y compartiendo tus historias con BECA en Astro!** ✨📝🚀