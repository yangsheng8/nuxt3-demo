<template>
  <div class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta
        name="description"
        :content="title"
      />
    </Head>
    <div>{{ counter.$state }}</div>

    <div class="global-text">
      <pre>{{ counter.$state }}</pre>
      <!-- Remove this component to get started! -->
      <p>
        N: {{ counter.n }}
        <br />
        myRef: {{ counter.myRef }}
      </p>

      <input
        v-model="counter.myRef"
        class="text-black"
        type="text"
      />
      <br />
      <input
        v-model="counter.n"
        class="text-black"
        type="number"
      />
    </div>
    <button
      class="global-text p-4"
      @click="counter.increment()"
    >
      +1 number click
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCounter } from '~/store/counter'

const counter = useCounter()

const title = ref('Nuxt的博客')
</script>
<style scoped></style>
