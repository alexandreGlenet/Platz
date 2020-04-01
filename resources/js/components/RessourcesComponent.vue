<template>
<div id="wrapper-container">

    <div class="container object">

        <div id="main-container-image">

            <section class="work">

                <figure v-for="ressource in ressources" :key="ressource.id" class="white">
                    <a href="details.html">
                        <img :src="'storage/'+ressource.photo" alt=""/>
                        <dl>
                            <dt>{{ ressource.nom }}</dt>
                            <dd>{{ ressource.description }}</dd>
                        </dl>
                    </a>
                    <div id="wrapper-part-info">
                        <div class="part-info-image"><img :src="'storage/'+ressource.categorie.icone" alt="" width="28" height="28" /></div>
                        <div id="part-info">{{ ressource.nom }}</div>
                    </div>
                </figure>

            </section>

        </div>

    </div>

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

    <!-- FOOTER -->

    <!-- <div id="wrapper-thank">
        <div class="thank">
            <div class="thank-text">pl<span style="letter-spacing:-5px;">a</span>tz</div>
        </div>
    </div> -->



    <!-- <div id="main-container-footer">
        <div class="container-footer">

            <div id="row-1f">
                <div class="text-row-1f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">What is Platz</span><br>Platz is a blog showcasing hand-picked free themes, design stuff,
                    free fonts and other resources for web designers.</div>
            </div>

            <div id="row-2f">
                <div class="text-row-2f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">How does it work</span><br>Platz offers you all the latest freebies found all over the
                    fourth corners without to pay.</div>
            </div>

            <div id="row-3f">
                <div class="text-row-3f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">Get in touch!</span><br>Subscribe our RSS or follow us on Facebook, Google+, Pinterest or
                    Dribbble to keep updated.</div>
            </div>

            <div id="row-4f">
                <div class="text-row-4f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">Newsletter</span><br>You will be informed monthly about the latest content avalaible.
                </div>

                <div id="main_tip_newsletter">
                    <form>
                        <input type="text" name="newsletter" id="tip_newsletter_input" list="newsletter" autocomplete=off required>
                    </form>
                </div>
            </div>

        </div>
    </div> -->


    <!-- <div id="wrapper-copyright">
        <div class="copyright">
            <div class="copy-text object">Copyright © 2016. Template by <a style="color:#D0D1D4;" href="https://dcrazed.com/">Dcrazed</a></div>

            <div class="wrapper-navbouton">
                <div class="google object">g</div>
                <div class="facebook object">f</div>
                <div class="linkin object">i</div>
                <div class="dribbble object">d</div>
            </div>
        </div>
    </div> -->

</div>
</template>

<script>
export default {
    data () {
      return {
        ressources: [],
        categories: []
      }
    },
    created () {
      axios.get('api/ressources') // Obtenue dans : php artisan route:list
           .then(reponsePHP => (this.ressources = reponsePHP.data));
      axios.get('api/categories') // Obtenue dans : php artisan route:list
           .then(reponsePHP => (this.categories = reponsePHP.data));
    },

    methods:{
      // getRessourcePhoto(){
      //   return "/storage/ressources/" +this.photo;
      // }
    }

}
</script>
