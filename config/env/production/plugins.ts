import { commonPlugins, configUploadProvider } from "../../plugin-settings";

export default ({ env }) => ({
  ...commonPlugins(),
  upload: configUploadProvider(env),
});
