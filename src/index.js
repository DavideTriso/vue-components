import * as Alert from './components/alert';
import * as Breadcrumb from './components/breadcrumb';

export default {
  Alert,
  Breadcrumb,

  install(Vue) {
    Alert.install(Vue);
    Breadcrumb.install(Vue);
  },
};

export { Alert };
export { Breadcrumb };
