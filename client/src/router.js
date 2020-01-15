import Vue from 'vue'
import Router from 'vue-router'
import ModulesContent from './views/ModuleContent.vue'
import Quizzes from './views/Quiz.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Content from './views/Content.vue'
import ModuleIndex from './views/ModuleIndex.vue'
import Modules from './views/Modules.vue'
import QuizList from './views/QuizList.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/home',
			name: 'moduleindex',
			component: ModuleIndex
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
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
			name: 'quizlist',
			component: QuizList
		},
		{
			path: '/quizzes/:id',
			name: 'modulequiz',
			component: Quizzes
		}
	]
})
