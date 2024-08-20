declare namespace NodeJS {
  export interface ProcessEnv {
    // 👇 Replace with your ENV names and types
    DATABASE_URL: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_KEY: string;
    AWS_REGION: string;
  }
}
