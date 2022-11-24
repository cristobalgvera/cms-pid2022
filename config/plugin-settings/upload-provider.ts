import { EnvFn } from "./env.type";

export function configUploadProvider(env: EnvFn) {
  return {
    config: {
      provider: "strapi-provider-upload-supabase-v4",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET", "strapi-uploads"),
        directory: env("SUPABASE_DIRECTORY", ""),
        options: {},
      },
    },
  };
}
