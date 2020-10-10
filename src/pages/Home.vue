<template>
  <div>
    <navheader></navheader>
    <router-view />
    <navfooter></navfooter>
  </div>
</template>

<script>
import navheader from "../components/NavHeader.vue";
import navfooter from "../components/NavFooter.vue";

export default {
  components: {
    navheader,
    navfooter,
  },
};
</script>