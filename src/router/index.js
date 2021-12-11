import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/indexBoard',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/Index.vue')
      },
      {
        path: '/products/:cateId',
        name: 'Products',
        component: () => import('../views/Products/Products.vue')
      },
      {
        path: '/product/:productId',
        component: () => import('../views/Products/ProductDetail.vue')
      },
      {
        path: '/cart/order',
        component: () => import('../views/Cart/Cart.vue')
      },
      {
        path: '/cart/checkout/:orderId',
        component: () => import('../views/Cart/Checkout.vue')
      },
      {
        path: '/news',
        component: () => import('../views/News/News.vue')
      },
      {
        path: '/news/:newsId',
        component: () => import('../views/News/NewsDetail.vue')
      },
      {
        path: '/team/:teamId',
        component: () => import('../views/Team/Teams.vue')
      },
      {
        path: '/about',
        component: () => import('../views/About/About.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Admin/Admin.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Admin/Coupons.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/Admin/Articles.vue')
      }
    ]
  },
  // 重新導向
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior () {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
