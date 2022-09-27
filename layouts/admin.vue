<template>
  <div>
    <div v-if="loading" class="absolute top-1/4 left-1/2">
      <PulseLoader></PulseLoader>
    </div>

    <div v-else class="w-full min-h-screen bg-gray-100"> 
      <TopBar></TopBar>
      <div :class="showButton ? 'block':'hidden'">
        <BackToTop/>
      </div>
      <SideBar></SideBar>
      <div class="md:w-full pt-80 md:pt-192 pb-8 px-16 ml-auto md:px-32 transition-width duration-300" :class="!showModalMenu ? 'w-full':'w-87percent'">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import SideBar from '~/components/Navbar/SideBar.vue'
import TopBar from '~/components/Navbar/TopBar.vue';


export default {
    components: { SideBar, TopBar, PulseLoader },
    data: () => ({
        loading: false,
        showButton: false
    }),
    computed: {
        ...mapGetters(["selectedMenu", "showModalMenu"])
    },
    mounted() {
        this.$nextTick(() => {
            this.loadingStart();
            setTimeout(() => this.loadingFinish(), 2000);
        });
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        loadingStart() {
            this.loading = true;
        },
        loadingFinish() {
            this.loading = false;
        },
        handleScroll() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.showButton = true;
            }
            else {
                this.showButton = false;
            }
        }
    },
}
</script>