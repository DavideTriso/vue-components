import '@/assets/stylus/vue-components.styl';

import * as Alert from './components/alert';
import * as Breadcrumb from './components/breadcrumb';
import * as Button from './components/button';
import * as Card from './components/card';
import * as Content from './components/content';
import * as Drawer from './components/drawer';
import * as Icon from './components/icon';
import * as Label from './components/label';
import * as NavIcon from './components/nav-icon';
import * as Navigation from './components/navigation';
import * as Overlay from './components/overlay';
import * as Toolbar from './components/toolbar';

export default {
  Alert,
  Breadcrumb,
  Button,
  Card,
  Content,
  Drawer,
  Icon,
  Label,
  NavIcon,
  Navigation,
  Overlay,
  Toolbar,

  install(Vue) {
    Alert.install(Vue);
    Breadcrumb.install(Vue);
    Button.install(Vue);
    Card.install(Vue);
    Content.install(Vue);
    Drawer.install(Vue);
    Icon.install(Vue);
    Label.install(Vue);
    NavIcon.install(Vue);
    Navigation.install(Vue);
    Overlay.install(Vue);
    Toolbar.install(Vue);
  },
};

export { Alert };
export { Breadcrumb };
export { Button };
export { Card };
export { Content };
export { Drawer };
export { Icon };
export { Label };
export { NavIcon };
export { Navigation };
export { Overlay };
export { Toolbar };
