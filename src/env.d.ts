/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_weatherKey: string;
  readonly VITE_VAPID_PUBLIC: string;
  readonly VITE_SERVER_PROD_URL: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
