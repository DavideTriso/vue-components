import * as Alert from './components/alert';
import * as Breadcrumb from './components/breadcrumb';
import * as Button from './components/button';
import * as Drawer from './components/drawer';

export default {
  Alert,
  Breadcrumb,
  Button,
  Drawer,

  install(Vue) {
    Alert.install(Vue);
    Breadcrumb.install(Vue);
    Button.install(Vue);
    Drawer.install(Vue);
  },
};

export { Alert };
export { Breadcrumb };
export { Button };
export { Drawer };
