// ./resources/js/store/actions.js
let actions = {

    setRessources({
        commit
    }) {
        //transaction AJAX
        axios.get('api/ressources') // Obtenue dans : php artisan route:list
            .then(reponsePHP => (commit('SET_RESSOURCES', reponsePHP.data))),
            axios.get('api/categories') // Obtenue dans : php artisan route:list
            .then(reponsePHP => (commit('SET_CATEGORIES', reponsePHP.data)))


    },

    createRessource({
        commit
    }, ressource) {
        axios.ressource('/api/ressources', ressource)
            .then(reponsePHP => {
                commit('CREATE_RESSOURCE', reponsePHP.data)
            })
    },
    fetchRessources({
        commit
    }) {
        axios.get('/api/ressources')
            .then(reponsePHP => {
                commit('FETCH_RESSOURCES', reponsePHP.data)
            })
    },
    deleteRessource({
        commit
    }, ressource) {
        axios.delete(`/api/ressources/${ressource.id}`)
            .then(res => {
                if (reponsePHP.data === 'ok')
                    commit('DELETE_RESSOURCE', ressource)
            })
    }
}


export default actions
