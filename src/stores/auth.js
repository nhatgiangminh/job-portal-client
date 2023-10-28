import { defineStore } from "pinia";
import axios from '@/config/axios.js'
import { toast } from "vue3-toastify";

const authStore = defineStore('authStore', {
  state: () => ({
    user: null,
    isAuth: false
  }),
  actions: {
    async login(inputData) {
      try {
        const res = await axios.post('/api/v1/auth/login', inputData)
        const token = res.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('user', res.data.user)
        this.user = res.data.user
        this.isAuth = true
      } catch (error) {
        console.log(error)
        if (error?.response.data?.error) {
          toast.error(error.response.data.error)
        }
        this.isAuth = false
        return Promise.reject(error)
      }
    },
    async register(inputData) {
      try {
        await axios.post('/api/v1/auth/register', inputData)
        toast.success('Register Successfully')
      } catch (error) {
        console.log(error)
        if (error?.response.data?.error) {
          toast.error(error.response.data.error)
        }
      }
    }
  }
})

export default authStore