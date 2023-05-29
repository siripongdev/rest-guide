<script setup>
//import { ref } from 'vue'

defineProps({
  msg: String,
})

//const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  
</template>

<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "/GoogleMap.js"
      //"https://maps.googleapis.com/maps/api/js?key=AIzaSyBRNrYYHRddNMWLvuGSkrMpTeRWnw7gVT0&callback=initMap"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>
