import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  base: '/',
  plugins: [
    ViteMinifyPlugin({
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drawing: resolve(__dirname, 'index1.html'),
        charts: resolve(__dirname, 'index2.html'),
        text: resolve(__dirname, 'index3.html'),
        outline: resolve(__dirname, 'index4.html'),
        jiggle: resolve(__dirname, 'index5.html'),
        morph: resolve(__dirname, 'index6.html'),
        highlighter: resolve(__dirname, 'index7.html'),
        paperfolding: resolve(__dirname, 'index8.html'),
        fontcreator: resolve(__dirname, 'index9.html'),
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      mangle: {
        toplevel: false,
      },
    },
  },
});
