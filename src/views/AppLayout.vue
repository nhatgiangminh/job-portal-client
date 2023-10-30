<template>
  <SiteNavigator />
  <div class="mx-auto">
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import SiteNavigator from '../components/SiteNavigator.vue';
</script>