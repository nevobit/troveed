declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'local' | 'development' | 'production';
            PORT: number;
            CORS_ORIGINS: string;
        }
    }
}

export {}