<template>
  <header class="flex items-center w-full shadow-md text-black sticky bg-mainColor h-20 border-t-4 border-secondaryColor">
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
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>