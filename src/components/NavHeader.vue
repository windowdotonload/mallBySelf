<template>
  <div>
    <div class="continer">
      <div class="content">
        <div class="left" style="float: left">
          <a href="">商城</a>
          <a href="">云服务</a>
          <a href="">协议规则</a>
        </div>
        <div class="right" style="float: right">
          <a href="">登录</a>
          <a href="">注册</a>
          <a
            href=""
            style="background: rgba(241, 196, 15, 1); padding: 0px 5px"
          >
            <span class="iconfont icon-gouwucheman" style="color: white"></span>
            购物车(0)
          </a>
        </div>
      </div>
    </div>
    <div classs="sec-continer"></div>
  </div>
</template>

<style scoped>
.continer {
  width: 100%;
  height: 38px;
  background: black;
}
.content {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}
.left,
.right {
  height: 38px;
}
a {
  display: inline-block;
  height: 38px;
  text-decoration: none;
  height: 38px;
  line-height: 38px;
  margin-right: 10px;
  font-size: 12px;
  color: white;
}
</style>