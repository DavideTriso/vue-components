import * as VAlert from './components/alert/alert.vue';
import * as VBreadcrumb from './components/breadcrumb/breadcrumb.vue';
import * as VButton from './components/button/button.vue';
import * as VDrawer from './components/drawer/drawer.vue';
import * as VDropdown from './components/dropdown/dropdown.vue';
import * as VIcon from './components/icon/icon.vue';
import * as VLabel from './components/label/label.vue';
import * as VList from './components/list/list.vue';
import * as VNavBar from './components/nav-bar/nav-bar.vue';
import * as VOverlay from './components/overlay/overlay.vue';
import * as VPanel from './components/panel/panel.vue';
import * as VProgress from './components/progress/progress.vue';
import * as VSideMenu from './components/side-menu/side-menu.vue';
import * as VTable from './components/table/table.vue';

require('./assets/stylus/vue-components.styl');

export const components = {
  VAlert,
  VBreadcrumb,
  VButton,
  VDrawer,
  VDropdown,
  VIcon,
  VLabel,
  VList,
  VNavBar,
  VOverlay,
  VPanel,
  VProgress,
  VSideMenu,
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
  VDrawer,
  VDropdown,
  VIcon,
  VLabel,
  VList,
  VNavBar,
  VOverlay,
  VPanel,
  VProgress,
  VSideMenu,
  VTable,
};
