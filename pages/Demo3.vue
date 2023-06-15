<template>
  <h2>demo3 布局页面</h2>
  <!-- 使用 layout -->
  <NuxtLayout name="default">
    <div>
      <h1>我是default插槽内容部分</h1>
    </div>

    <template #two> 我是two中的内容 </template>
  </NuxtLayout>
</template>
<script setup></script>
<style lang="less" scoped></style>
