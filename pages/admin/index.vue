<template>
  <div class="w-full bg-identity-darkgray min-h-609 md:min-h-800 rounded-8">
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  components: {

  },
  layout: 'admin',
  asyncData({store, $axios}) {
      store.commit('SET_PAGE_TITLE', 'DASHBOARD')
  },
  computed: {
    ...mapGetters(['showModalMenu'])
  },
}
</script>