import deepmerge from 'deepmerge';
import { defineConfig, loadEnv } from "vite"
import viteBase from "./config/vite.base"
import viteDev from "./config/vite.dev"
import viteProd from "./config/vite.prod"

const viteConfig = {
  getOption(option: any) {
    Object.keys(option).forEach((key) => {
      if (viteBase[key]) {
        if (Array.isArray(viteBase[key])) {
          viteBase[key] = [...viteBase[key], ...option[key]]
        } else if (typeof viteBase[key] == "object") {
          viteBase[key] = Object.assign(viteBase[key], option[key])
        }
      } else {
        viteBase[key] = option[key]
      }
    })
    return viteBase
  },
  serve() {
    // return this.getOption(viteDev)
    return deepmerge(viteBase, viteDev)
  },
  build() {
    // return this.getOption(viteProd)
    return deepmerge(viteBase, viteProd)
  }
}

export default defineConfig(({ command, mode }) => {
  // console.log('mode>>>>', loadEnv(mode, process.cwd()).VITE_BASE_URL);
  return viteConfig[command]()
})
