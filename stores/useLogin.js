import { defineStore } from 'pinia'

export const useLogin = defineStore({
  id: 'useLogin',
  state: () => {
    return {
      isShowLogin: false,
    }
  },
  actions: {
    show() {
      this.isShowLogin = true
    },
    hide() {
      this.isShowLogin = false
    },
  },
})
