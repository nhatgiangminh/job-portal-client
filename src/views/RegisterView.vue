<template>
  <div class=" w-screen h-screen bg-gradient-to-r from-[#EBF3E8] to-[#86A789] relative">
    <div class="card grid grid-cols-1 sm:grid-cols-2 w-full px-4 sm:px-16 sm:py-12 rounded-lg h-3/4 sm:w-2/3 shadow-xl bg-mainColor absolute left-1/2
    top-1/2  -translate-x-1/2 -translate-y-1/2"
    >
      <div class="hidden sm:flex w-full items-center">
        <img src="../assets/img-01.webp" alt="img">
      </div>
      <div class="w-full flex flex-col text-black items-center justify-center">
        <span class="text-2xl font-bold mb-6">Register</span>
        <form class="w-full">
          <div class="flex flex-col w-full items-center">
            <!--Email input-->
            <div class="w-2/3 flex items-center rounded-2xl bg-[#e6e6e6] h-12 input-wrapper">
              <span class=" ml-8">
                <i class="fa-solid fa-envelope text-[#666666] transition-all duration-300 "></i>
              </span>
              <input v-model="formState.email" class="input bg-transparent border-none focus:outline-none text-[#666666] placeholder:font-medium px-4"
                placeholder="Email" type="email"
              >
            </div>
            <!-- Email error message -->
            <div class="flex flex-col gap-1" v-if="$v.email.$error">
              <span class=" text-red-600 text-sm" v-for="error in $v.email.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <!-- Password input -->
            <div class="w-2/3 flex items-center rounded-2xl bg-[#e6e6e6] h-12 input-wrapper mt-3">
              <span class=" ml-8">
                <i class="fa-solid fa-lock text-[#666666] transition-all duration-300 "></i>
              </span>
              <input v-model="formState.password" class="input bg-transparent border-none focus:outline-none text-[#666666] placeholder:font-medium px-4"
                placeholder="Password" type="password"
              >
            </div>
            <!-- Password error message -->
            <div class="flex flex-col gap-1" v-if="$v.password.$error">
              <span class=" text-red-600 text-sm" v-for="error in $v.password.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <!-- Confirm password input -->
            <div class="w-2/3 flex items-center rounded-2xl bg-[#e6e6e6] h-12 input-wrapper mt-3">
              <span class=" ml-8">
                <i class="fa-solid fa-lock text-[#666666] transition-all duration-300 "></i>
              </span>
              <input v-model="formState.confirmPassword" class="input bg-transparent border-none focus:outline-none text-[#666666] placeholder:font-medium px-4"
                placeholder="Confirm password" type="password"
              >
            </div>
            <!-- Confirm password error message -->
            <div class="flex flex-col gap-1" v-if="$v.confirmPassword.$error">
              <span class=" text-red-600 text-sm" v-for="error in $v.confirmPassword.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <!--Name input-->
            <div class="w-2/3 flex items-center rounded-2xl bg-[#e6e6e6] h-12 input-wrapper mt-3">
              <span class=" ml-8">
                <i class="fa-solid fa-user text-[#666666] transition-all duration-300 "></i>
              </span>
              <input v-model="formState.name" class="input bg-transparent border-none focus:outline-none text-[#666666] placeholder:font-medium px-4"
                placeholder="Name" type="text"
              >
            </div>
            <!-- Name error message -->
            <div class="flex flex-col gap-1" v-if="$v.name.$error">
              <span class=" text-red-600 text-sm" v-for="error in $v.name.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <!--Last name input-->
            <div class="w-2/3 flex items-center rounded-2xl bg-[#e6e6e6] h-12 input-wrapper mt-3">
              <span class=" ml-8">
                <i class="fa-solid fa-user text-[#666666] transition-all duration-300 "></i>
              </span>
              <input v-model="formState.lastName" class="input bg-transparent border-none focus:outline-none text-[#666666] placeholder:font-medium px-4"
                placeholder="Last name" type="text"
              >
            </div>
            <!--Location input-->
            <div class="w-2/3 flex items-center rounded-2xl bg-[#e6e6e6] h-12 input-wrapper mt-3">
              <span class=" ml-8">
                <i class="fa-solid fa-location-dot text-[#666666] transition-all duration-300 "></i>
              </span>
              <input v-model="formState.location" class="input bg-transparent border-none focus:outline-none text-[#666666] placeholder:font-medium px-4"
                placeholder="Location" type="text"
              >
            </div>
            <button type="submit" @click.prevent="formSubmitHandler" class="w-2/3 rounded-2xl font-bold h-full btn btn-accent mt-3">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import useAuthStore from '@/stores/auth.js'

const authStore = useAuthStore()
const formState = reactive({
  email: null,
  password: null,
  confirmPassword: null,
  name: null,
  lastName: null,
  location: null,
})
const confirmPasswordValidator = (value) => value === formState.password
const rules = computed(() => {
  return {
    email: {
      required,
      email
    },
    password: {
      required
    },
    name: {
      required
    },
    confirmPassword: {
      required,
      confirmPasswordValidator: helpers.withMessage('Password does not match', confirmPasswordValidator)
    }
  }
})
const $v = useVuelidate(rules, formState)
const formSubmitHandler = async () => {
  const isCorrect = await $v.value.$validate()
  if (!isCorrect) return
  delete formState.confirmPassword
  await authStore.register(formState)
}
</script>

<style scoped>

.input-wrapper:focus-within i {
  color: #29ca8e;
  transform: translateX(-8px);
}
</style>