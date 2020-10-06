import { directive } from "../directives/is-in-view-directive";

export function install(Vue) {
  Vue.directive("in-view-observer", directive);
}
