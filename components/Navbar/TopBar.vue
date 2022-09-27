<template>
    <div class="fixed w-full h-64 md:h-128 bg-white flex items-center pr-16 pl-16 md:pl-16">
        <div class="text-24 md:text-64 uppercase font-semibold text-black flex items-center">
            <i class="mr-16 cursor-pointer leading-16" :class="showModalMenu ? 'fa fa-align-left':'fa fa-bars'" @click="$store.commit('toggleModalMenu')"></i>
            {{pageTitle}}
        </div>
        <div class="relative ml-auto mr-32 md:mr-16">
            <img
                alt="icon SSO Ditjen PHU"
                src="storage/icon/icon-notification.svg"
                class="w-24"
            />
            <div
            v-if="notifCounter > 0"
            :class="notifCounter > 99 ? 'text-5':'text-8'"
            class="bg-red-700 text-white w-13 h-13 rounded-full font-bold flex items-center justify-center absolute top-5 right-0 border-1 border-solid border-white">
                <span>{{notifCounter > 99 ? '99+': notifCounter}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['pageTitle', 'notifCounter','showModalMenu'])
    },
}
</script>