import { configCkeditor } from "./ckeditor";

export function commonPlugins() {
  return {
    ckeditor: configCkeditor(),
    "duplicate-button": true,
  };
}
