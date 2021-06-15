import Vue from 'vue';
import {
  ValidationProvider, ValidationObserver, extend, configure,
} from 'vee-validate';
// eslint-disable-next-line camelcase
import { required, email, alpha_num } from 'vee-validate/dist/rules.umd';

configure({
  classes: {
    valid: '',
    invalid: 'in-valid',
  },
});

extend('required', {
  ...required,
  message: '{_field_} 為必填欄位',
});
extend('email', {
  ...email,
  message: '請輸入正確 e-mail 格式',
});
extend('alpha_num', {
  // eslint-disable-next-line camelcase
  ...alpha_num,
  message: '{_field_} 不可包含特殊字元',
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
