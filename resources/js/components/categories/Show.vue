<template>
<div class="">

    <section class="work">

        <figure v-for="ressource in moreRessourceByCat" :key="ressource.id" class="white">
            <router-link :to="{name: 'ressources.show', params: { id: ressource.id }}">
                <img :src="'storage/'+ressource.photo" alt="" />
                <dl>
                    <dt>{{ ressource.categorie.nom }}</dt>
                    <dd>{{ ressource.description }}</dd>
                </dl>
            </router-link>
            <div id="wrapper-part-info">
                <div class="part-info-image"><img :src="'storage/'+ressource.categorie.icone" alt="" width="28" height="28" /></div>
                <div id="part-info">{{ ressource.nom }}</div>
            </div>
        </figure>

    </section>

    <div id="wrapper-oldnew">
        <button @click="increaseRessourceByCat()" class="btn btn-outline-dark btn-lg boutonCenter" type="button" name="button">More Ressources</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

            limitRessourcesByCat: 4,
            newPage: 1,
            lastIdCategory: 0

        }
    },


    computed: {

        ressources() {
            let id = this.$route.params.id;
            return this.$store.getters.getRessourcesByCategorieId(id);
        },
        moreRessourceByCat() {

            let id = this.$route.params.id;
            //Si limitRessourcesByCat existe
            if (this.limitRessourcesByCat) {
                console.log('Catégorie précédente : ' + this.lastIdCategory)
                console.log('Id catégorie en cours : ' + id)
                //Si la catégorie précédente est la même que celle-ci, je continue a charger les posts
                if (this.lastIdCategory == id) {
                    console.log('Limite des ressources : ' + this.limitRessourcesByCat)
                    return this.$store.getters.getRessourcesByCategorieId(id).slice(0, this.limitRessourcesByCat)
                } else {
                    this.lastIdCategory = id
                    console.log('Nouveau lastIdCategory = ' + this.lastIdCategory)

                    this.limitRessourcesByCat = 4
                    console.log('Nouveau limitRessourcesByCat = ' + this.limitRessourcesByCat)

                    return this.$store.getters.getRessourcesByCategorieId(id).slice(0, this.limitRessourcesByCat)
                }

            } else {
                console.log('limitRessourcesByCat Existe Pas')
                return this.ressources
            }
            // return this.limitRessourcesByCat ? this.$store.getters.getRessourcesByCategorieId(id).slice(0, this.limitRessourcesByCat) : this.ressources
        }


    },
    created() {
        this.$store.dispatch('setRessources').then(() => { // Mettre les actions dans chaque vue permet de pouvoir modifier le backoffice et que l'utilisateur voit les changement sans relancer le site.
            this.loaded = true // avec le v-if qui permet d'attendre que mon composant soit chargé pour ne pas avoir l'erreur : Error in render: “TypeError: Cannot read property ‘name’ of undefined”
        });

    },

    methods: {
        increaseRessourceByCat() {
            //let id = this.$route.params.id;
            this.limitRessourcesByCat += 4;
        }
    }

}
</script>
