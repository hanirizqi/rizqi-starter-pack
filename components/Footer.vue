<template>
  <div class="w-full bg-identity-cream px-1/6 md:px-10percent p-24 flex flex-row justify-between md:text-32">
    <div class="flex flex-col">
        <div class="mb-8">CONNECT WITH US</div>
        <div class="flex justify-between">
          <img src="storage/icons/youtube.svg" class="w-20 md:w-48">
          <img src="storage/icons/facebook.svg" class="w-20 md:w-48">
          <img src="storage/icons/twitter.svg" class="w-20 md:w-48">
          <img src="storage/icons/instagram.svg" class="w-20 md:w-48">
        </div>
    </div>
    <div class="flex flex-col">
      <div class="mb-8">ABOUT</div>
      <nuxt-link to="#" class="text-12 md:text-32">Company Profile</nuxt-link>
      <nuxt-link to="#" class="text-12 md:text-32">Procedures</nuxt-link>
      <nuxt-link to="#" class="text-12 md:text-32">Career</nuxt-link>
    </div>
    <div class="flex flex-col">
      <div class="mb-8">SUPPORT</div>
      <nuxt-link to="#" class="text-12 md:text-32">Privacy Policy</nuxt-link>
      <nuxt-link to="#" class="text-12 md:text-32">Terms and Condition</nuxt-link>
      <nuxt-link to="#" class="text-12 md:text-32">Help</nuxt-link>      
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {

    }
  }
}
</script>