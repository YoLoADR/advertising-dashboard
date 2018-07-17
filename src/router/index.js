import Vue from 'vue'
import Router from 'vue-router'

// example one
const ExampleOne = () => import('Views/pages/ExampleOne');


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: ExampleOne,
			meta: {
				title: 'Lock Screen',
				breadcrumb: 'Session / Login'
			}
		}
	]
})
