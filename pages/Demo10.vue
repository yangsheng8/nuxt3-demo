<template>
  <h1>Counter:{{ counter }}</h1>
  <button @click="reset">Reset</button> <button @click="add">Add</button>
</template>
<script setup>
const counter = useCookie('counter')
counter.value = counter.value || 0
const reset = () => {
  counter.value = 0
}
const add = () => {
  counter.value = counter.value + 1
}
</script>
<style scoped></style>
