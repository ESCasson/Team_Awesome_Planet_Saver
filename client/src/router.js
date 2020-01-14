import Vue from 'vue'
import Router from 'vue-router'
import ModulesContent from './views/ModuleContent.vue'
import Quizzes from './views/Quiz.vue'
import Login from './views/Login.vue'
import Content from './views/Content.vue'
import Index from './views/Index.vue'
import Modules from './views/Modules.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/learning_library',
			name: 'learning_library',
			component: Content
		},
		{
			path: '/modules/:id',
			name: 'modulesContent',
			component: ModulesContent
		},
		{
			path: '/modules/:id/:page',
			name: 'modules',
			component: Modules
		},
		{
			path: '/quizzes',
			name: 'quizzes',
			component: Quizzes
		},
		{
			path: '/quizzes/:id',
			name: 'modulequiz',
			component: Quizzes
		}
	]
})
