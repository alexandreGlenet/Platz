// ./resources/js/store/getters.js
let getters = {

  getRessources(state) {
    return state.ressources;
  },

  getRessourceById(state) {
    return function (id) { // Je transforme en fonction pour ma computed de mon Show.vue
      return state.ressources.find(ressource => ressource.id == id);
    }
  },

  getRessourcesByCategorieId(state) {
    return function (id){
      return state.ressources.filter(ressources => ressources.categorie.id == id);
    }

  },

//   function getByCategory(list, category) {
//   if (!category) return list
//   return list.filter(item => item.category == category)
// }

  getCategories(state) {
    return state.categories;
  },

  getCategorieById(state) {
    return function (id) { // Je transforme en fonction pour ma computed de mon Show.vue
      return state.categories.find(categorie => categorie.id == id);
    }
  }

}

export default  getters
