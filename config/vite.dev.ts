import { defineConfig } from "vite"
import { viteMockServe } from "vite-plugin-mock"

export default defineConfig({
  server: {
    port: 8080,
    open: true,
    https: false
    // proxy: { // 配置跨域
    //   '/api': {
    //     target: '要代理的地址',
    //     changeOrigin: true,
    //     ws: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  plugins: [
    viteMockServe({
      mockPath: "src/aMock",
      watchFiles: true
    })
  ]
})
