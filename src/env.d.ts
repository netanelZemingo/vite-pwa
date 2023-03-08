/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_weatherKey: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }