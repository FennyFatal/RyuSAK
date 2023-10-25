import { defineConfig } from 'vite'
import renderer from 'vite-plugin-electron-renderer'
export default defineConfig({ plugins: [renderer()] });