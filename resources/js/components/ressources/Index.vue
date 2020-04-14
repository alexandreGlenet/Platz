<template>
<div class="" v-if="loaded">
    <section class="work">
        
        <figure v-for="ressource in ressources" :key="ressource.id" class="white">
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
        <button @click="limitRessources += 8" class="btn btn-outline-dark btn-lg boutonCenter" type="button" name="button">More Ressources</button>
    </div>
</div>
</template>

<script>
import {
    EventBus
} from '../../event-bus.js';
export default {
    data() {
        return {
            //ressources: [],
            //categories: []
            loaded: false,
            limitRessources: 20,
            searchvalue: '',


        }
    },

    computed: {
        ressources() {
          // créer une methode setActive !!!
            let ressources = this.$store.getters.getRessources.map((el, index) => {
                if (index < this.limitRessources) el.isActive = true;
                return el;
            });
            //créer une méthode setFilter !!!
            ressources = ressources.filter(el => {
                if (el !== undefined && el.isActive === true) {
                    if (el.nom.toLowerCase().includes(this.searchvalue.toLowerCase())) {
                        return true;
                    } else if (el.categorie.nom.toLowerCase().includes(this.searchvalue.toLowerCase())) {
                        return true;
                    } else {
                        return false
                    }
                }
            });
            return ressources;
        },

        /**
        moreRessource() {

            return this.ressources.filter(ressource => {
                if (ressource.nom.toLowerCase().includes(this.searchvalue.toLowerCase())) {
                    return true;
                } else if (ressource.categorie.nom.toLowerCase().includes(this.searchvalue.toLowerCase())) {
                    return true;
                } else {
                    return false
                }
            })
            return this.limitRessources ? this.ressources.slice(0, this.limitRessources) : this.ressources

            // return this.ressources.filter(ressource =>
            //   ressource.nom.toLowerCase().includes(
            //     this.searchvalue.toLowerCase()
            //
            //   )
            // &&ressource.categorie.nom.match(this.searchvalue);

            // );
            // return this.ressources.filter(ressource =>
            //   ressource.categorie.nom.toLowerCase().includes(
            //     this.searchvalue.toLowerCase()
            //
            //   )
            // &&ressource.categorie.nom.match(this.searchvalue);

            // );

            // return this.ressources.filter((ressource) => {
            //   return ressource.nom.match(this.searchvalue);
            // &&ressource.categorie.nom.match(this.searchvalue);

            // }

        }
        **/
    },
    created() {
        this.$store.dispatch('setRessources').then(() => { // Mettre les actions dans chaque vue permet de pouvoir modifier le backoffice et que l'utilisateur voit les changement sans relancer le site.
            this.loaded = true // avec le v-if qui permet d'attendre que mon composant soit chargé pour ne pas avoir l'erreur : Error in render: “TypeError: Cannot read property ‘name’ of undefined”
        });
        EventBus.$on('search-value', (search) => {
            this.searchvalue = search;
        })
    },



}
</script>
