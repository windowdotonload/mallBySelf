<template>
  <div>
    <orderheader></orderheader>
    <h1>C A R T</h1>
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