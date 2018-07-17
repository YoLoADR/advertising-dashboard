// App Card component
import AppCard from 'Components/AppCard/AppCard';

const GlobalComponents = {
   install(Vue) {
      Vue.component('appCard', AppCard);
   }
}

export default GlobalComponents
