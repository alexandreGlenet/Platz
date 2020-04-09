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
            // ressources: [],
            // categories: []
            limitRessourcesByCat: 4,
            // currentRessourcesByCat:''
        }
    },


    computed: {

        ressources() {
            let id = this.$route.params.id;
            return this.$store.getters.getRessourcesByCategorieId(id);
        },
        moreRessourceByCat() {

            let id = this.$route.params.id;
            return this.limitRessourcesByCat ? this.$store.getters.getRessourcesByCategorieId(id).slice(0, this.limitRessourcesByCat) : this.ressources
        }


    },
    created() {
        //this.$store.dispatch('setPrenom', "Pierre");

    },

    methods: {
        increaseRessourceByCat() {
            //let id = this.$route.params.id;
            this.limitRessourcesByCat += 4;
        }
    }

}
</script>
