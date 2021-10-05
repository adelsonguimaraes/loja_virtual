import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from  '@/components/Produto.vue'
import ListaProduto from '@/views/produto/Lista.vue'
import CadProduto from '@/views/produto/Cadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: Home
  },
  {
    path: '/produto',
    name: 'Produto',
    component: Produto,
    children: [
      {
        path: 'lista',
        name: 'produto.lista',
        component: ListaProduto
      },
      {
        path: 'cadastro/:id?',
        name: 'produto.cadastro',
        component: CadProduto
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
