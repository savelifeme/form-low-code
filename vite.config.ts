/*
 * @Author: wjw
 * @Date: 2023-06-27 10:34:05
 * @LastEditTime: 2023-06-29 23:08:36
 * @LastEditors: wjw
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import esbuild from "rollup-plugin-esbuild";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
    // vueJsx(),
    // {
    //   ...esbuild({
    //     target: "chrome64",
    //     sourceMap:false,
    //     loaders: {
    //       ".vue": "js",
    //       ".ts": "js",
    //       ".tsx": "js",
    //     },
    //     jsxFactory: "h",
    //     jsxFragment: "Fragment",
    //     tsconfig: "tsconfig.json",
    //     minify: true,
    //   }),
    //   // enforce: 'post'
    // },
  ],
  // optimizeDeps: {
  //   include: ["@vue/babel-plugin-jsx"],
  // },
  resolve: { // 配置别名
    alias: {
      "@": "/src" // @表示src目录
    }
  },
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
    sourcemap: false,
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
