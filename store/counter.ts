import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'

interface CounterState {
  n: number
  myRef: Ref<string>
}

export const useCounter = defineStore('counter', {
  state: (): CounterState => ({
    n: 5,
    myRef: ref('hello'),
  }),
  persist: true,
  actions: {
    increment() {
      this.n++
    },
  },
})
