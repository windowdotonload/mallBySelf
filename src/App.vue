<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // 本地加载json文件
    // this.axios.get("/mock/user/login.json").then((res) => {});
  },
  mounted() {},
};
</script>
