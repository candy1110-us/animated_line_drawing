import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  base: '/animated_line_drawing/',
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
        toplevel: true,
      },
    },
  },
});
