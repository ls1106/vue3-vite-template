import { defineConfig } from "vite"
import legacy from "@vitejs/plugin-legacy" // 作用：使js代码兼容低版本浏览器，验证：看打包后的dist里的index.html可知，当浏览器支持原生ESM时，加载<script type="module">相应的js，低版本的浏览器不支持原生ESM时，就会加载<script nomodule>相应的js(https://blog.csdn.net/Mr_JavaScript/article/details/125388234)
import viteCompression from "vite-plugin-compression" // 作用：开启.gz压缩

export default defineConfig({
  build: {
    // minify: false, // false：打包后的文件不压缩代码(换行、去掉空格等)
    rollupOptions: {
      // 配置 rollup 构建策略
      output: {
        entryFileNames: "[name].[hash].js", // 打包后的入口文件名
        assetFileNames: "static/[ext]/[name].[hash].[ext]", // 打包后的其它文件名
        chunkFileNames: "chunk/[name].[hash].js", // 打包后的代码分割文件名
        // 1、手动分包—以各模块的方式进行分包(会生成各自的分包文件，如vue.js、pinan.js等)
        // manualChunks: {
        //   vue: ["vue", "pinia", "vue-router"],
        //   elementIcons: ["@element-plus/icons-vue"]
        // }
        // 2、手动分包——将node_modules里所有的第三方库,全部分包到一个名为vendor.js的文件里
        manualChunks: (id) => {
          // console.log("id>>>>>>>>", id); // id：id是项目里的每个文件
          if (id.includes("node_modules")) {
            return "vendor"
          }
          // 下面根据if判断，对不同的模块也进行分包处理(自己写的模块也可以)
          // if (id.includes('api')) {
          //   return 'api'
          // }
        }
        // 3、自动分包，直接用import("loadsh")动态导入(动态导入是es6的新特性)
      }
    },
    assetsInlineLimit: 4096 // 默认是4096(4kb) 低于4kb都会被打包成base64
  },
  plugins: [
    // 开启gzip压缩
    viteCompression({
      disable: false,
      verbose: true, // 是否在控制台中输出压缩结果
      threshold: 20480, // 如果体积大于阈值，将被压缩，单位为b(1kb=1024b)，体积过小不要压缩，适得其反(浏览器解压要时间)
      algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      ext: ".gz"
      // deleteOriginFile: false // true：打包后，只保留压缩文件
    }),
    legacy({
      targets: ["defaults", "ie >= 11", "chrome 52"], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // IE11时需要此插件
    })
  ]
})
