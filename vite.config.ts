import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { getPackageInfo } from 'local-pkg'
const pkg = require('./package.json')

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig(async () => {
  const repl = await getPackageInfo('@vue/repl')
  return {
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
    define: {
      'import.meta.env.APP_VERSION': JSON.stringify(pkg.version),
      'import.meta.env.REPL_VERSION': JSON.stringify(repl!.version),
    },
    server: {
      https: true,
      host: true,
    },
    plugins: [
      vue({
        reactivityTransform: `${pathSrc}/**/*`,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
    ],
  }
})
