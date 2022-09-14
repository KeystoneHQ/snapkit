import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-transform-typescript',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'snapkit',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'semantic-ui-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'semantic-ui-react': 'SemanticUiReact'
        }
      }
    }
  }
})
