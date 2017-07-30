import * as Alert from './components/alert';
import * as Breadcrumb from './components/breadcrumb';
import * as Button from './components/button';
import * as Content from './components/content';
import * as Drawer from './components/drawer';
import * as Icon from './components/icon';
import * as NavIcon from './components/nav-icon';
import * as Overlay from './components/overlay';
import * as Toolbar from './components/toolbar';

require('@/assets/stylus/vue-components.styl');

export default {
  Alert,
  Breadcrumb,
  Button,
  Content,
  Drawer,
  Icon,
  NavIcon,
  Overlay,
  Toolbar,

  install(Vue) {
    Alert.install(Vue);
    Breadcrumb.install(Vue);
    Content.install(Vue);
    Button.install(Vue);
    Drawer.install(Vue);
    Icon.install(Vue);
    NavIcon.install(Vue);
    Overlay.install(Vue);
    Toolbar.install(Vue);
  },
};

export { Alert };
export { Breadcrumb };
export { Button };
export { Content };
export { Drawer };
export { Icon };
export { NavIcon };
export { Overlay };
export { Toolbar };
