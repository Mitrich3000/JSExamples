import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Auth/Login.vue';
import Registration from './components/Auth/Registration.vue';
import Users from './components/Users.vue';
import authAPI from './components/Auth/auth';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!authAPI.isAuthenticated()) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (!authAPI.isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
};

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: [{
    path: '/',
    name: 'Главная',
    component: Home,
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: ifAuthenticated,
    },
    {
      name: 'user',
      path: '/users/:userId',
      component: Users,
      beforeEnter: ifAuthenticated,
    },

  ],
});
