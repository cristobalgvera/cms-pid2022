export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-aws-s3-advanced",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          bucket: env("AWS_BUCKET"),
        },
        baseUrl: env("CDN_BASE_URL"),
        prefix: env("BUCKET_PREFIX"),
      },
    },
  },
});
