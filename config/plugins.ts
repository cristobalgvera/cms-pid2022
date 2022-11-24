import { configCkeditor, configUploadProvider } from "./plugin-settings";

export default ({ env }) => ({
  upload: configUploadProvider(env),
  ckeditor: configCkeditor(),
});
