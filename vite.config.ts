import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('%c 🥐 mode', 'color:#4fff4B', mode)
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [react()],
    esbuild: {
      ...(mode === 'production' && {
        drop: ['console', 'debugger']
      })
    },
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
  }
})
