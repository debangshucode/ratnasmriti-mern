interface ImportMetaEnv {
  readonly VITE_API_URL: string; // CRA
  // readonly VITE_FRONT_END_URL: string; // Vite
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
