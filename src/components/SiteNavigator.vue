<template>
  <header class="flex items-center w-full shadow-md text-black sticky top-0 bg-mainColor h-20 border-t-4 border-secondaryColor">
    <nav class=" w-3/12 flex justify-center">
      <RouterLink to="/">
        <h3 class="font-medium text-black text-xl">Jobs Agency</h3>
      </RouterLink>
    </nav>
    <nav class="h-full flex items-center px-4 text-black transition hover:bg-secondaryColor hover:text-white">
      <RouterLink to="/">
        <h3 class=" font-light">Home</h3>
      </RouterLink>
    </nav>
    <nav class="h-full flex items-center px-4 text-black transition hover:bg-secondaryColor hover:text-white">
      <RouterLink to="/">
        <h3 class=" font-light">About</h3>
      </RouterLink>
    </nav>
    <nav class="h-full flex items-center px-4 text-black transition hover:bg-secondaryColor hover:text-white">
      <RouterLink to="/">
        <h3 class=" font-light">Jobs</h3>
      </RouterLink>
    </nav>
    <nav class="h-full flex items-center px-4 text-black transition hover:bg-secondaryColor hover:text-white">
      <RouterLink to="/">
        <h3 class=" font-light">Contact Us</h3>
      </RouterLink>
    </nav>
    <div class="avatar flex flex-1 justify-end relative">
      <div class="rounded-full w-12 mr-8">
        <img src="@/assets/img-01.webp" alt="avatar">
      </div>
      <div class="absolute w-15 flex flex-col bg-mainColor z-10 right-12 top-12 h-auto">
        <div @click="logOutHandler" class="flex gap-4 w-full hover:bg-secondaryColor hover:text-white p-2 transition-all">
          <i class="fa-solid fa-right-from-bracket text-lg"></i>
          <span class="text-md font-light">Log out</span>
        </div>
        <div class="flex gap-4 w-full hover:bg-secondaryColor hover:text-white p-2 transition-all">
          <i class="fa-solid fa-right-from-bracket text-lg"></i>
          <span class="text-md font-light">Profile</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router';
import useAuthStore from '@/stores/auth.js';

const authStore = useAuthStore()
const router = useRouter()

const logOutHandler = () => {
  authStore.logOut()
  router.push({ name: 'LoginView' })
}

</script>