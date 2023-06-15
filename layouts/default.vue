<template>
  <div>
    <h1>这是default布局</h1>
    <slot />
    __________________________
    <slot name="two" />

    <the-footer />
  </div>
</template>
<script setup></script>
<style lang="less" scoped></style>
