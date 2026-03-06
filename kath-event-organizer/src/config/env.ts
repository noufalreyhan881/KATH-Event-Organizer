/**
 * Environment variable validation and access
 */

interface EnvConfig {
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_APP_ENV: 'development' | 'production' | 'test';
}

const requiredEnvVars = ['NEXT_PUBLIC_API_URL'] as const;

/**
 * Validate environment variables at runtime
 */
export const validateEnv = (): EnvConfig => {
  const missing: string[] = [];

  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }

  return {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
    NEXT_PUBLIC_APP_ENV: (process.env.NODE_ENV as any) || 'development',
  };
};

// Export env variables (safe access)
export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  APP_ENV: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const;
