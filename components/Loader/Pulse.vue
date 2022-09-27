<template>
    <div>
        <div class="md:hidden">
            <PulseLoader></PulseLoader>
        </div>
        <div class="hidden md:block">
            <PulseLoader :size="'2rem'"></PulseLoader>
        </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: { PulseLoader },
}
</script>