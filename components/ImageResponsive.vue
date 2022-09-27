<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder ${isRounded}`"
    class="relative z-0"
  >
    <div class="absolute top-0 left-0 w-full h-full z-10"></div>
    <picture>
      <source
        v-if="
          imageRequiredMobile && imageRequiredMobile !== 'null'
            ? imageRequiredMobile
            : ''
        "
        :srcset="imageRequiredMobile"
        media="(max-width: 768px)"
      />
      <img
        v-if="imageRequired"
        :data-src="imageRequired"
        :src="imageRequired"
        :data-loading="imageRequired.placeholder"
        :width="width"
        :height="height"
        :alt="alt"
        :class="classes"
      />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    imageUrlMobile: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'Kemenag DJPHU',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    fromApi: {
      type: Boolean,
      default: false,
    },
    fromUrl: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imageRequired() {
      if (this.fromApi === false) {
        if (this.fromUrl === false && this.imageUrl) {
          // return require(`~/assets/images/${this.imageUrl}`)
          return require(`~/static/${this.imageUrl}`)
        } else {
          return `${this.imageUrl}`
        }
      } else {
        return `${this.imageURLAPI}${this.imageUrl}`
      }
    },
    imageRequiredMobile() {
      if (this.fromApi === false) {
        if (this.fromUrl === false && this.imageUrlMobile) {
          // return require(`~/assets/images/${this.imageUrlMobile}`)
          return require(`~/static/${this.imageUrlMobile}`)
        } else {
          return `${this.imageUrlMobile}`
        }
      } else {
        return `${this.imageURLMobileAPI}${this.imageUrlMobile}`
      }
    },
    isRounded() {
      return this.rounded ? 'image-placeholder--rounded' : ''
    },
    imageURLAPI() {
      return process.env.IMAGE_URL
    },
  },
}
</script>

<style scoped lang="scss">
.image-placeholder {
  overflow: hidden;
  line-height: 0;

  &--rounded {
    border-radius: 100%;
  }
}

img {
  transition: all ease 0.3s;
  opacity: 0;

  &[lazy='loading'] {
    opacity: 1;
    // filter: blur(3px);
    @apply bg-red-400;
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
