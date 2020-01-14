import Vue from 'vue'
import Router from 'vue-router'
import Modules from './views/Content.vue'
import Quizzes from './views/Quiz.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/modules',
			name: 'modules',
			component: Modules
		},
		{
			path: '/quizzes',
			name: 'quizzes',
			component: Quizzes
		}
	]
})
