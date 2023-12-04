declare namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;

    //RDS
    RDS_HOSTNAME: string;
    RDS_DB_NAME: string;
    RDS_USERNAME: string;
    RDS_PASSWORD: string;
    RDS_PORT: number;
  }
}
