<template>
<div class="">
    <a name="ancre"></a>
    <!-- CACHE -->
    <div class="cache"></div>
    <!-- HEADER -->
    <div id="wrapper-header">
        <div id="main-header" class="object">
            <router-link @click="limitRessourcesByCat -= '4'" :to="{name: 'ressources.index'}">
                <div class="logo"><img src="img/logo-burst.png" alt="logo platz" height="38" width="90"></div>
            </router-link>
            <div id="main_tip_search">
                <form>
                    <input type="text" name="search" id="tip_search_input" list="search" autocomplete=off required>
                </form>
            </div>
            <div id="stripes"></div>
        </div>
    </div>
    <!-- NAVBAR -->
    <div id="wrapper-navbar">
        <div class="navbar object">

            <div id="wrapper-bouton-icon" v-for="categorie in categories" :key="categorie.id">
                <router-link :to="{name: 'categories.show', params: { id: categorie.id }}">
                    <div id="bouton-ai">
                        <img :src="'storage/'+categorie.icone" :title="categorie.nom" :alt="categorie.nom" height="28" width="28">
                    </div>
                </router-link>
            </div>
            <!-- <ul v-for="categorie in categories" :key="categorie.id">
              <li><img :src="'storage/'+categorie.icone"  height="28" width="28"></li>
            </ul> -->
        </div>
    </div>
    <!-- FILTER -->

    <div id="main-container-menu" class="object">
        <div class="container-menu">

            <div id="main-cross">
                <div id="cross-menu"></div>
            </div>

            <div id="main-small-logo">
                <div class="small-logo"></div>
            </div>

            <div id="main-premium-ressource">
                <div class="premium-ressource"><a href="#">Premium resources</a></div>
            </div>

            <div id="main-themes">
                <div class="themes"><a href="#">Latest themes</a></div>
            </div>

            <div id="main-psd">
                <div class="psd"><a href="#">PSD goodies</a></div>
            </div>

            <div id="main-ai">
                <div class="ai"><a href="#">Illustrator freebies</a></div>
            </div>

            <div id="main-font">
                <div class="font"><a href="#">Free fonts</a></div>
            </div>

            <div id="main-photo">
                <div class="photo"><a href="#">Free stock photos</a></div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            limitRessourcesByCat: 4

        }
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        },
        moreRessourceByCat() {

            let id = this.$route.params.id;
            return this.limitRessourcesByCat ? this.$store.getters.getRessourcesByCategorieId(id).slice(0, this.limitRessourcesByCat) : this.ressources
        },
        ressources() {
            let id = this.$route.params.id;
            return this.$store.getters.getRessourcesByCategorieId(id);
        }
    }
}
</script>
