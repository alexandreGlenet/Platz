<template>
<div class="">
    <section class="work">

        <figure v-for="ressource in ressources" :key="ressource.id" class="white">
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
        <div class="oldnew">
            <div class="wrapper-oldnew-prev">
                <div id="oldnew-prev"></div>
            </div>
            <div class="wrapper-oldnew-next">
                <div id="oldnew-next"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
             // ressources: [],
             // categories: []
        }
    },

    computed: {

      ressources() {
          let id = this.$route.params.id;
          return this.$store.getters.getRessourcesByCategorieId(id);
      }


    },
    created() {
        //this.$store.dispatch('setPrenom', "Pierre");

    },

    methods: {
        // getRessourcePhoto(){
        //   return "/storage/ressources/" +this.photo;
        // }
    }

}
</script>
