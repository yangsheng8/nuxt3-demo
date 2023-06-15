<template>
  <div class="demo6">
    <h2>{{ list }}</h2>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const url = 'http://121.36.81.61:8000/getTenArticleList'
//const res = await useAsyncData('getList', () => $fetch(url))
const res = await useFetch(url)
const list = ref(res.data._rawValue.data)
</script>
<style lang="less" scoped></style>
