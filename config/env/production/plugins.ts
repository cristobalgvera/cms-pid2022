import { commonPlugins, configUploadProvider } from "../../plugin-settings";

export default ({ env }) => ({
  ...commonPlugins(),
  ...configUploadProvider(env),
});
