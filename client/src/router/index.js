import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'List all Product',
    component: () => import('../components/list-product/ListProductComponent'),
  },
  {
    path: '/create-product',
    name: 'Create new Product',
    component: () => import('../components/create-product/CreateProductComponent'),
  },
  {
    path: '/edit-product/:id',
    name: 'Update Product',
    component: () => import('../components/edit-product/EditProductComponent'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  // Quando houver carregamento de uma pagina inicial, então usar o NProgress
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completa a animação da rota usando o progress bar
  NProgress.done();
});

export default router;
