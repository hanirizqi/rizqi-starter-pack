<template>
  <div>
    <div class="pt-64 md:pt-80 q-bg">
        <div v-if="pageLoading" class="q-full-overlay"></div>
        <PulseLoader v-if="pageLoading" class="fixed top-1/2 left-1/2" style="z-index: 99;"></PulseLoader>
        <nuxt/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: { Footer, PulseLoader },
    data: () => ({
        navClass: "",
    }),
    computed: {
        ...mapGetters(['showModalLogin', 'pageLoading']),
    },
    mounted() {
        if(this.$route.path === '/'){
            document.addEventListener("scroll", () => {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    this.navClass = "bg-identity-green q-nav";
                }
                else {
                    this.navClass = "bg-transparent";
                }
            });
        }
    },
}
</script>