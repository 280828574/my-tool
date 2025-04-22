<script>
  export default {
    onShow: function (options) {
      const updateManager = uni.getUpdateManager()
      updateManager.onUpdateReady(function (res) {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          },
        })
      })
    },
    onHide: function () {},
  }
</script>
<style></style>
<style lang="scss">
  /*每个页面公共css */
  @import './uni_modules/vk-uview-ui/index.scss';
  @import '@/uni_modules/uni-scss/index.scss';
  @import '@/assets/style/index.scss';
  /* #ifndef APP-NVUE */
  // 设置整个项目的背景色
  page {
    width: 100vw;
    height: 100vh;
    background: #f5f5f5;
  }
  /* #endif */
  view,
  textarea,
  input,
  text,
  button {
    box-sizing: border-box;
  }
</style>
