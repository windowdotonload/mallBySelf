<template>
  <div>
    <orderheader></orderheader>
    <router-view></router-view>
    <navfooter></navfooter>
  </div>
</template>

<script>
import orderheader from "../components/OrderHeader.vue";
import navfooter from "../components/NavFooter.vue";

export default {
  components: {
    orderheader,
    navfooter,
  },
};
</script>