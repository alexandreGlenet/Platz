// ./resources/js/store/getters.js
let getters = {

  // LES RESSOURCES

  getRessources(state) {
    return state.ressources;
    return this.ressources.filter((ressource) => {
      return ressource.nom.match(this.search);
    })
  },

  getRessourceById(state) {
    return function (id) { // Je transforme en fonction pour ma computed de mon Show.vue
      return state.ressources.find(ressource => ressource.id == id);
    }
    return this.ressources.filter((ressource) => {
      return ressource.nom.match(this.search);
    })
  },

  getRessourcesByCategorieId(state) {
    return function (id){
      return state.ressources.filter(ressources => ressources.categorie.id == id);
  }
  return this.ressources.filter((ressource) => {
    return ressource.nom.match(this.search);
  })
},

getCategorieByRessourceId(state) {
  return function (id){
    return state.categories.filter(categories => categories.ressource.id == id);
}
},



  // LES CATEGORIES

  getCategories(state) {
    return state.categories;
  },

  getCategorieById(state) {
    return function (id) { // Je transforme en fonction pour ma computed de mon Show.vue
      return state.categories.find(categorie => categorie.id == id);
    }
  },

  // LES PLATZERS ( utilisateurs de platz )

  getPlatzers(state){
    return state.platzers;
  },

  getPlatzerById(state) {
    return function (id) { // Je transforme en fonction pour ma computed de mon Show.vue
      return state.platzers.find(platzer => platzer.id == id);
    }
  },

  // LES COMMENTAIRES

  getCommentaires(state){
    return state.commentaires;
  },

  getCommentaireById(state) {
    return function (id) { // Je transforme en fonction pour ma computed de mon Show.vue
      return state.commentaires.find(commentaire => commentaire.id == id);
    }
  },

  getCommentairesByRessourceId(state) {
    return function (id){
      return state.commentaires.filter(commentaires => commentaires.ressource.id == id);
  }
},

  // getPlatzerById(state) {
  //   return function (id) {
  //     return state.platzers.find(platzer => platzer.id == id);
  //   }
  // },



  // LES USERS ( VOYAGER )

  // getUSers ( state) {
  //   return.state.users;
  // }

}

export default  getters
