<template>
  <view class="time-wrap flex-jz">
    <view class="time-value">{{ time }}</view>
  </view>
</template>
<script setup>
  import { getCurrentInstance, ref, onMounted } from 'vue'

  let proxy = getCurrentInstance().proxy
  const $scripts = proxy.$scripts
  const time = ref('')

  const calculateTime = targetDate => {
    const date = new Date()
    // 减去30分钟煮蛋时间
    targetDate.setMinutes(targetDate.getMinutes() - 30)
    const diff = targetDate.getTime() - date.getTime()
    let hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    // 处理分钟数：大于30保留30，小于30不保留
    if (minutes < 30) {
      return `${hours}小时`
    } else {
      return `${hours}小时30分钟`
    }
  }

  onMounted(() => {
    const date = new Date()
    const targetDate = new Date(date)

    // 设置目标时间为明天8点
    targetDate.setDate(date.getDate() + 1)
    targetDate.setHours(8, 0, 0)

    time.value = calculateTime(targetDate)
  })
</script>

<style lang="scss">
  .time-wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;

    .time-value {
      font-size: 60rpx;
      color: #333;
      font-weight: bold;
    }
  }
</style>
