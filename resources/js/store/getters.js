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

  getCategories(state) {
    return state.categories;
  }

}

export default  getters
