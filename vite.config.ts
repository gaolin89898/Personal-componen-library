import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve('./src')
    }
  },
  server:{
    port:8000,
    https:false
  },
  // proxy:{
  //   '/api':{
  //     tatget:'',
  //     changeOringin:true,
  //     rewrite:path => path.replace(/^\/api/,'')
  //   }
  // }
})
