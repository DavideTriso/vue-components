import * as VAlert from './components/alert/alert.vue';
import * as VBreadcrumb from './components/breadcrumb/breadcrumb.vue';
import * as VButton from './components/button/button.vue';
import * as VDropdown from './components/dropdown/dropdown.vue';
import * as VLabel from './components/label/label.vue';
import * as VList from './components/list/list.vue';
import * as VPanel from './components/panel/panel.vue';
import * as VProgress from './components/progress/progress.vue';
import * as VTable from './components/table/table.vue';

require('./assets/stylus/vue-components.styl');

export const components = {
  VAlert,
  VBreadcrumb,
  VButton,
  VDropdown,
  VLabel,
  VList,
  VPanel,
  VProgress,
  VTable,
};

export default {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  },
};

export {
  // components
  VAlert,
  VBreadcrumb,
  VButton,
  VDropdown,
  VLabel,
  VList,
  VPanel,
  VProgress,
  VTable,
};
