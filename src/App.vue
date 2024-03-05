<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <i class="pi pi-check"></i>
        <RouterLink to="/" class=" text-3xl text-blue-500">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <Button label="Submit" />
        <Button label="Primary" />
        <Slider v-model="range" range class="w-14rem" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
        <Button label="123" />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Button from 'primevue/button';

import Slider from 'primevue/slider';

const range = ref(null);

</script>