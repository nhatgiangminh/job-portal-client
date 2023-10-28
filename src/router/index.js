import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const AppLayout = () => import('@/views/AppLayout.vue')
const LoginView = () => import('@/views/LoginView.vue')
const RegisterView = () => import('@/views/RegisterView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: AppLayout,
      meta: {
        isAuth: true
      },
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
      meta: {
        isAuth: false
      }
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
      meta: {
        isAuth: false
      }
    }
  ]
})

router.beforeEach((to, from) => {
  // const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')
  if (to.meta.isAuth && !token) {
    return { name: 'LoginView' }
  }

  if (!to.meta.isAuth && token) {
    return { name: 'home' }
  }
})

export default router
