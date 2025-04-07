import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path" //这里的path来自@types/node
import AutoImport from "unplugin-auto-import/vite" // 作用：自动按需导入相关函数，不用在每个组件里手动引入vue3里组合式API了、路由、vuex，比如ref
import Components from "unplugin-vue-components/vite" // 作用：自动按需导入组件，简单的说,不需要再写import xx from ‘xxx.vue’引入组件了
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve("./src") // @代替src目录, 注意：path.resolve() 打印出来就是项目名在电脑上的位置
      // '#': path.resolve('./types') // #代替types目录
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";'
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          "@vueuse/core": []
        }
      ], // 按需导入
      dts: path.resolve("./src/types/auto-import.d.ts") // 存放ts类型的位置
    }),
    Components({
      resolvers: [ElementPlusResolver()], // 按需导入element plus组件
      dirs: [path.resolve("./src/components")], // 按需导入自定义组件(默认把自己封装的组件写在src/components里)
      dts: path.resolve("./src/types/components.d.ts") // 存放ts类型的位置
    })
  ]
})
