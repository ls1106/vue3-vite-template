/// <reference types="vite/client" />
// 上面是三元指令，相当于import vite/client from 'xxxx'

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
