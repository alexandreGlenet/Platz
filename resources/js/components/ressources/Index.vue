<template>
<div class="">
    <section class="work">

        <figure v-for="ressource in ressources.slice(0,20)" :key="ressource.id" class="white">
            <router-link :to="{name: 'ressources.show', params: { id: ressource.id }}">
                <img :src="'storage/'+ressource.photo" alt="" />
                <dl>
                    <dt>{{ ressource.nom }}</dt>
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
        <button  class="btn btn-outline-dark btn-lg boutonCenter"type="button" name="button">More Ressources</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            //ressources: [],
            //categories: []

            itemsPerPage: 20

        }
    },

    computed: {
        ressources() {
            return this.$store.getters.getRessources;
        },

    },
    created() {
        //this.$store.dispatch('setPrenom', "Pierre");

    },

    methods: {

    }

}
</script>
