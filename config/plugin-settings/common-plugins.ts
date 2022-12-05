import { configCkeditor } from "./ckeditor";
import { configDuplicateButton } from "./duplicate-button";

export function commonPlugins() {
  return {
    ...configDuplicateButton(),
    ...configCkeditor(),
  };
}
