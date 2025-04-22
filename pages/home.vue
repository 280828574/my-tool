<template>
  <view class="home-wrap">
    <view class="item-wrap">
      <view class="item" @click="handleToDetail">煮蛋时间</view>
    </view>
  </view>
</template>
<script setup>
  import { getCurrentInstance, ref, onMounted } from 'vue'

  let proxy = getCurrentInstance().proxy

  const handleToDetail = () => {
    uni.navigateTo({ url: `/pages/time` })
  }
</script>

<style lang="scss">
  .home-wrap {
    height: 100vh;
    padding: 38rpx 36rpx 0 36rpx;
    padding-bottom: calc(12rpx);
    padding-bottom: calc(12rpx + constant(safe-area-inset-bottom));
    padding-bottom: calc(12rpx + env(safe-area-inset-bottom));
    .item-wrap {
      width: 100%;
      .item {
        width: 100%;
        padding: 30rpx;
        background: #fff;
        border-radius: 15rpx;
        font-size: 34rpx;
        font-weight: bold;
        color: #333;
        margin-bottom: 30rpx;
      }
    }
  }
</style>
