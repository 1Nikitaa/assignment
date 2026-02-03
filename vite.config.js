import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoName = 'assignmentSporty'; 
const basePath = process.env.GITHUB_PAGES ? `/${repoName}/` : '/';

export default defineConfig({
  base: basePath,
  plugins: [vue()]
})