<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    // 本地加载json文件
    // this.axios.get("/mock/user/login.json").then((res) => {});
    this.axios.get("/user/login").then((res) => {
      this.data = res;
    });
  },
};
</script>
