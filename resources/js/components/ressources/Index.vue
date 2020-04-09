<template>
<div class="" v-if="loaded">
    <section class="work">

        <figure v-for="ressource in moreRessource" :key="ressource.id" class="white">
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
        <button  @click="limitRessources += 8" class="btn btn-outline-dark btn-lg boutonCenter"type="button" name="button">More Ressources</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            //ressources: [],
            //categories: []
            loaded: false,
            limitRessources: 20

        }
    },

    computed: {
        ressources() {
            return this.$store.getters.getRessources;
        },
        moreRessource(){
          return this.limitRessources ? this.ressources.slice(0,this.limitRessources) : this.ressources
  }

    },
    created() {
      this.$store.dispatch('setRessources').then(()=> { // Mettre les actions dans chaque vue permet de pouvoir modifier le backoffice et que l'utilisateur voit les changement sans relancer le site.
        this.loaded = true // avec le v-if qui permet d'attendre que mon composant soit chargé pour ne pas avoir l'erreur : Error in render: “TypeError: Cannot read property ‘name’ of undefined”
      });
    },

    methods: {

    }

}
</script>
