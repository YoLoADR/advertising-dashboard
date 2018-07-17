/**
 * App Entry File
 * Vuely: A Powerfull Material Design Admin Template
 * Copyright 2018. All Rights Reserved
 * Created By: The Iron Network, LLC
 * Made with Love
 */
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import { Vue2Dragula } from 'vue2-dragula'
import VueQuillEditor from 'vue-quill-editor'
import wysiwyg from 'vue-wysiwyg'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueResource from 'vue-resource'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import AmAngularGauge from 'amcharts3/amcharts/gauge'
import VModal from 'vue-js-modal'
import VueI18n from 'vue-i18n'
import VueTour from 'vue-tour'
import fullscreen from 'vue-fullscreen'
import InstantSearch from 'vue-instantsearch'
import $ from 'jquery';

// global components
import GlobalComponents from './globalComponents'

// app.vue
import App from './App'

// router
import router from './router'

// store
import { store } from './store/store';

// include script file
import './lib/VuelyScript'

// include all css files
import './lib/VuelyCss'

// messages
import messages from './lang';


function toast({ title, message, type, timeout, cb }) {
	return miniToastr[type](message, title, timeout, cb)
}

const options = {
	success: toast,
	error: toast,
	info: toast,
	warn: toast
}

const toastTypes = {
	success: 'success',
	error: 'error',
	info: 'info',
	warn: 'warn'
}

miniToastr.init({ types: toastTypes })

// plugins
Vue.use(Vuetify, {
	theme: store.getters.selectedTheme.theme
});
Vue.use(InstantSearch);
Vue.use(VueI18n)
Vue.use(AmCharts)
Vue.use(VModal)
Vue.use(AmSerial)
Vue.use(VueTour)
Vue.use(AmAngularGauge)
Vue.use(Vue2Dragula)
Vue.use(VueQuillEditor)
Vue.use(VueResource)
Vue.use(wysiwyg, {})
Vue.use(VueBreadcrumbs)
Vue.use(VueNotifications, options)
Vue.use(fullscreen);
Vue.use(GlobalComponents);
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' // Add your here your google map api key
	}
})

// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: store.getters.selectedLocale.locale, // set locale
	messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	i18n,
	router,
	template: '<App/>',
	components: { App }
})
