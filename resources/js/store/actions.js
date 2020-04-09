// ./resources/js/store/actions.js
let actions = {

    setRessources({
        commit
    }) {
        //transaction AJAX
        return axios.get('api/ressources') // Obtenue dans : php artisan route:list
            .then(reponsePHP => (commit('SET_RESSOURCES', reponsePHP.data)))
            axios.get('api/categories') // Obtenue dans : php artisan route:list
            .then(reponsePHP => (commit('SET_CATEGORIES', reponsePHP.data)))
    },

    setCategories({
        commit
    }) {
        //transaction AJAX

            axios.get('api/categories') // Obtenue dans : php artisan route:list
            .then(reponsePHP => (commit('SET_CATEGORIES', reponsePHP.data)))
    },

    // LES USERS

    // setUsers({
    //     commit
    // }) {
    //     //transaction AJAX
    //
    //         axios.get('Voyager/admin/users') // Obtenue dans : php artisan route:list
    //         .then(reponsePHP => (commit('SET_PLATZERS', reponsePHP.data)))
    // },

    // LES PLATZERS

    setPlatzers({
        commit
    }) {
        //transaction AJAX

            axios.get('api/platzers') // Obtenue dans : php artisan route:list
            .then(reponsePHP => (commit('SET_PLATZERS', reponsePHP.data)))
    }

    // createRessource({
    //     commit
    // }, ressource) {
    //     axios.ressource('/api/ressources', ressource)
    //         .then(reponsePHP => {
    //             commit('CREATE_RESSOURCE', reponsePHP.data)
    //         })
    // },
    // fetchRessources({
    //     commit
    // }) {
    //     axios.get('/api/ressources')
    //         .then(reponsePHP => {
    //             commit('FETCH_RESSOURCES', reponsePHP.data)
    //         })
    // },
    // deleteRessource({
    //     commit
    // }, ressource) {
    //     axios.delete(`/api/ressources/${ressource.id}`)
    //         .then(res => {
    //             if (reponsePHP.data === 'ok')
    //                 commit('DELETE_RESSOURCE', ressource)
    //         })
    // }
}


export default actions
