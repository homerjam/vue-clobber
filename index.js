import Clobber from './src';

function plugin(Vue) {
  Vue.directive('clobber', Clobber);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;

// const version = '__VERSION__'

export {
  Clobber,
  // version
};
