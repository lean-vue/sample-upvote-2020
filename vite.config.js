import { createVuePlugin } from 'vite-plugin-vue2';

export default {
  root: './src',
  build: {
    outDir: '../dist'
  },
  plugins: [createVuePlugin()]
}
