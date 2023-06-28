import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import esbuild from "rollup-plugin-esbuild";
import sourcemaps from 'rollup-plugin-sourcemaps';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...esbuild({
        target: "chrome64",
        sourceMap:false,
        loaders: {
          ".vue": "js",
          ".ts": "js",
          ".tsx": "js",
        },
        jsxFactory: "h",
        jsxFragment: "Fragment",
        tsconfig: "tsconfig.json",
        minify: true,
      }),
      // enforce: 'post'
    },
    // sourcemaps()
  ],
  build: {
    sourcemap: false,
    outDir: "dist2",
    minify: "terser",
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        sourcemap: false,
        // 静态资源合并打包
        // chunkFileNames: "static/js/[name]-[hash].js",
        // entryFileNames: "static/js/[name]-[hash].js",
        // assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  esbuild: {
    sourcemap: 'both',
    sourcesContent: false,
  },
  server: {
    host: '0.0.0.0',
    // sourcemapIgnoreList(sourcePath: any, sourcemapPath) {
    //   return sourcePath.includes('node_modules')
    // }
  },
  base:'/'
})
