<template>
  <div class="overflow-hidden h-screen">
    <div v-if="error.statusCode === 404" class="w-full pt-64">
      <img src="storage/errors/error.webp"  class="mx-auto w-1/3 object-contain mt-16 mb-24">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: { Footer },
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
