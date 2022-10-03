import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
  ],
  server:{
    proxy:{
      '/api/v1':{
        target:'http://121.196.236.94:3000/'
      }
    }
  }
})
