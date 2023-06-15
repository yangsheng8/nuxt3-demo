<template>
  <div class="Demo2">
    <div class="">获取的id:{{ id }}, 获取的name:{{ name }}</div>
    <lazyText v-if="show" /> <button @click="handleClick">显示/隐藏</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const route = useRoute()
const id = ref(route.params.id)
const name = ref(route.params.name)
const show = ref(false)
const handleClick = () => {
  show.value = show.value ? false : true
}
</script>
<style lang="less" scoped></style>
