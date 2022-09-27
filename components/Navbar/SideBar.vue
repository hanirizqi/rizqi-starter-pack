<template>
    <div class="mr-8 mt-80 md:mt-128 h-609 md:h-screen w-192 md:w-full bg-identity-green md:z-50 rounded-r-8 fixed transform transition duration-200 ease-in-out"
     :class="[
      showModalMenu ? 'translate-x-0' : '-translate-x-full',
    ]">
        <div class="flex flex-col relative pl-8 pr-32 py-16">
            <div class="mx-auto my-16">
                <img
                alt="icon example"
                src="icon.png"
                class="w-52 md:w-1/4 md:mx-auto"
                />
            </div>
            <hr class="border-gray-400 border-opacity-50 w-3/4 md:w-1/2 mx-auto mb-32 md:mb-80">
            <div
            v-for="(parentMenu, index) in adminMenu"
            :key="index"
            class="text-white md:w-3/4 md:mx-auto"
            >
                <div 
                class="py-8 px-16 text-16 md:text-64 flex items-center"
                :class="parentMenu.child ? 'cursor-pointer':''"
                @click="parentMenu.child ? toggleOpen(parentMenu.id_menu) : ''"
                >
                    <nuxt-link
                    v-if="!parentMenu.child" 
                    class="cursor-pointer"
                    :class="parentMenu.id_menu === selectedMenu.id_menu ? 'text-identity-yellow':'hover:text-identity-yellow'"
                    :to="parentMenu.title !=='Logout' ? parentMenu.link : '#'"
                    @click.native="parentMenu.title !=='Logout' ? setMenu(parentMenu): logout()"
                    >
                        {{parentMenu.title}} 
                    </nuxt-link>
                    <div v-else
                    class="cursor-pointer"
                    :class="parentMenu.id_menu === selectedMenu.id_menu ? 'text-identity-yellow':''"
                    >
                        {{parentMenu.title}}
                    </div>
                    <i v-if="parentMenu.child && parentMenu.is_hidden === 'N'" class="fa fa-angle-down ml-auto cursor-pointer text-20 md:text-64"></i>
                    <i v-if="parentMenu.child && parentMenu.is_hidden ==='Y'" class="fa fa-angle-up ml-auto cursor-pointer text-20 md:text-64"></i>
                </div>
                <div 
                v-show="parentMenu.child && parentMenu.is_hidden ==='Y'"
                class="px-32 text-12 md:text-64">
                    <div
                    v-for="(childMenu, i) in parentMenu.child"
                    :key="i"
                    class="text-white py-8 md:pl-80"
                    >  
                            <nuxt-link
                            class="cursor-pointer"
                            :class="parentMenu.id_menu === selectedMenu.id_menu && childMenu.id_menu === selectedMenu.child.id_menu ? 'text-identity-yellow':'hover:text-identity-yellow'"
                            :to="childMenu.link"
                            @click.native="setMenuWithChild(parentMenu, childMenu)"
                            >
                                {{childMenu.title}} 
                            </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            currentPath: '',
            selected:{}
        }
    },
    computed: {
    ...mapGetters(['adminMenu', 'selectedMenu', 'userProfile', 'showModalMenu'])
    },
    created(){
        this.currentPath = this.$route.path
    },
    methods: {
        toggleOpen(id_menu){
            this.$store.commit('TOGGLE_OPEN_MENU', id_menu)
        },
        setMenu(notParent){
            this.$store.commit('SET_PAGE_TITLE', notParent.title)
            this.$store.commit('toggleModalMenu')
        },
        setMenuWithChild(parent, child){
            this.$store.commit('SET_PAGE_TITLE', child.title)
            this.$store.commit('toggleModalMenu')
        },
        async logout(){
            this.$nuxt.$loading.start()
            await this.$auth.logout('local').then(() => {
                setTimeout(() => this.$nuxt.$loading.finish(), 5000)
                this.$swal.fire({
                    icon: 'success',
                    title: 'Logged Out',
                }).then(() => {
                    this.$router.push('/');
                })
            })
        },
    },
}
</script>