// import axios from 'axios'

const state = () => ({
  error: false,
  pageLoading: false,
  adminMenu: [
    {
      id_menu: 0,
      title: 'Dashboard',
      link: '#'
    },
    {
      id_menu: 1,
      title: 'Accomodation',
      link: '#'
    },
    {
      id_menu: 2,
      title: 'Setting',
      link: '#',
      is_hidden: 'N',
      child: [
        {
          id_menu: 21,
          title: 'Child 1',
          link: '#'
        },
        {
          id_menu: 22,
          title: 'Child 2',
          link: '#'
        }
      ]
    },
  ],
  selectedMenu: {
    id_menu: 0,
    href: '#',
    child: {
      id_menu: null,
      href: '#',
    }
  },
  showModalMenu: false,
  pageTitle:'',
  notifCounter: 0,  
})
const getters = {
  // global
  pageLoading: (state) => state.pageLoading,
  pageTitle: (state) => state.pageTitle,
  headReturn: () => {
    const title = 'Example' 
    const desc = 'Example'
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Example',
        },
        {
          hid: 'og:image',
          property: 'og:image',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: desc,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: desc,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
  
  // user
  userProfile: (state) => state.userProfile,

  // admin
  adminMenu: (state) => state.adminMenu,
  showModalMenu: (state) => state.showModalMenu,
  selectedMenu: (state) => state.selectedMenu,
  notifCounter: (state) => state.notifCounter,


}
const actions = {
  nuxtServerInit({ commit }, ctx) {

  },
  getUrl({ commit }, ctx) {

  },
}
const mutations = {
  toggleModalMenu(state) {
    state.showModalMenu = !state.showModalMenu
  },
  SET_PAGE_TITLE: (state, pageTitle) => (state.pageTitle = pageTitle),
  SET_PAGE_LOADING: (state, pageLoading) => (state.pageLoading = pageLoading),
  SET_NOTIF_COUNTER: (state, notifCounter) => (state.notifCounter = notifCounter),
  SET_SELECTED_MENU: (state, selectedMenu) => (state.selectedMenu = selectedMenu),
  TOGGLE_OPEN_MENU: (state, id_menu) => {
    const menu = state.adminMenu.find(m => m.id_menu === id_menu)
    if(menu.is_hidden === 'N'){
      menu.is_hidden = 'Y'
    }else{
      menu.is_hidden = 'N'
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
