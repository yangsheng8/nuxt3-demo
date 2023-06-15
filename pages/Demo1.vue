<template>
  <div class="hello-world">
    <h2>hello-world</h2>
    <h3>{{ time }}</h3>
    <h3>{{ test }}</h3>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const time = ref(getTime())

const test = ref(testFun())
</script>
<style lang="less" scoped></style>
