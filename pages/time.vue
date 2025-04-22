<template>
  <view class="time-wrap flex-jz"> {{ time }}</view>
</template>
<script setup>
  import { getCurrentInstance, ref, onMounted } from 'vue'

  let proxy = getCurrentInstance().proxy
  const $scripts = proxy.$scripts
  const time = ref('')

  const calculateTime = targetDate => {
    const date = new Date()
    const diff = targetDate.getTime() - date.getTime()
    let hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    // 统一处理分钟数小于30的情况
    hours = minutes < 30 ? hours - 1 : hours
    return `${hours}小时30分钟`
  }

  onMounted(() => {
    const date = new Date()
    const targetDate = new Date(date)

    // 根据当前时间设置目标时间为今天或明天的8点
    if (date.getHours() > 8) {
      targetDate.setDate(date.getDate() + 1)
    }
    targetDate.setHours(8, 0, 0)

    time.value = calculateTime(targetDate)
  })
</script>

<style lang="scss">
  .time-wrap {
    width: 100vw;
    height: 100vh;
    font-size: 50rpx;
  }
</style>
