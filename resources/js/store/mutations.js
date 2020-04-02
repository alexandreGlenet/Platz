// ./resources/js/store/mutations.js
// On modifie les données locales
let mutations = {

  // LES RESSOURCES

  SET_RESSOURCES (state, data) {
    state.ressources = data;
  },
  CREATE_RESSOURCE (state, ressource) {
    state.ressources.unshift(ressource) // On ajoute une ressource en début de tableau
  },
  FETCH_RESSOURCES (state, ressources) {
    return state.ressources = ressources // On rempli le tableau avec les ressources
  },
  DELETE_RESSOURCE (state, ressource) {
    let index = state.ressources.findIndex(item => item.id === ressource.id)
    state.ressources.splice(index, 1) // On vire la ressource du tableau
  },

  // LES CATEGORIES

  SET_CATEGORIES (state, data) {
    state.categories = data;
  }

}
export default mutations
