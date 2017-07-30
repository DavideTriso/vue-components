import * as Alert from './components/alert';
import * as Breadcrumb from './components/breadcrumb';
import * as Button from './components/button';
import * as Drawer from './components/drawer';
import * as Icon from './components/icon';
import * as NavIcon from './components/nav-icon';

export default {
  Alert,
  Breadcrumb,
  Button,
  Drawer,
  Icon,
  NavIcon,

  install(Vue) {
    Alert.install(Vue);
    Breadcrumb.install(Vue);
    Button.install(Vue);
    Drawer.install(Vue);
    Icon.install(Vue);
    NavIcon.install(Vue);
  },
};

export { Alert };
export { Breadcrumb };
export { Button };
export { Drawer };
export { Icon };
export { NavIcon };
