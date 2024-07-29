interface ImportMetaEnv {
  readonly IC_BASE_URL: string;
  readonly IC_DEBUG: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
