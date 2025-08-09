#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createPost() {
  rl.question('Título de tu historia: ', (title) => {
    rl.question('Categoría (Relato/Cuento/Blog/Consejo/Reflexión/Ficción): ', (category) => {
      rl.question('Tags (separados por comas): ', (tagsInput) => {
        rl.question('Resumen breve: ', (summary) => {
          
          const slug = slugify(title);
          const date = new Date().toISOString();
          const tags = tagsInput.split(',').map(tag => `"${tag.trim()}"`).join(', ');
          
          const frontMatter = `---
title: "${title}"
date: ${date}
draft: false
image: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=800"
category: "${category}"
tags: [${tags}]
summary: "${summary}"
---

Escribe aquí tu historia...

`;

          const fileName = `src/pages/posts/${slug}.md`;
          
          // Crear el directorio si no existe
          const dir = path.dirname(fileName);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          
          fs.writeFileSync(fileName, frontMatter);
          
          console.log(`\n✅ Post creado: ${fileName}`);
          console.log(`📝 Ahora puedes editarlo y agregar tu contenido`);
          console.log(`🖼️  Cambia la imagen URL por una de Pexels apropiada`);
          console.log(`🚀 Para publicar, cambia draft: false y ejecuta: npm run build`);
          
          rl.close();
        });
      });
    });
  });
}

console.log('🌸 Crear nueva historia para BECA (Astro)\n');
createPost();