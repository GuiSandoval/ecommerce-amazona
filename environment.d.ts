declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MONGO_URI: string;
    }
  }
}

export {};
