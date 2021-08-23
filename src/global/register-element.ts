import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubmenu
} from "element-plus";

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
];

export default function(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
