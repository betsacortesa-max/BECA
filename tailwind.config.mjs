/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rose-dust': '#F5E6E8',
        'coral-pink': '#F4C2C2',
        'warm-coral': '#E8B4B8',
        'soft-cream': '#FEF7F0',
        'golden-accent': '#F0D5A8',
        'sand-pastel': '#F5F0E8',
        'charcoal': '#2D2D2D'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};