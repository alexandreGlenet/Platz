import Vue    from 'vue'
import Router from 'vue-router'

// Chargement des composants des différentes routes
import RessourcesIndex from './components/ressources/Index'
import RessourcesShow  from './components/ressources/Show'
import CategoriesShow  from './components/categories/Show'

// Création du routing
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ressources.index',
      component: RessourcesIndex
    },
    {
      path: '/ressources/:id',
      name: 'ressources.show',
      component: RessourcesShow
    },
    {
      path: '/categories/:id',
      name: 'categories.show',
      component: CategoriesShow,

    }


    // Et en envoyant des props au composant !!!
    // {
    //   path: '/posts/test',
    //   name: 'test',
    //   component: Poststest,
    //   props: { test: 'coucou' }
    // }
  ]
})
