import * as Alert from './components/alert';
import * as Breadcrumb from './components/breadcrumb';
import * as Button from './components/button';

export default {
  Alert,
  Breadcrumb,
  Button,

  install(Vue) {
    Alert.install(Vue);
    Breadcrumb.install(Vue);
    Button.install(Vue);
  },
};

export { Alert };
export { Breadcrumb };
export { Button };
