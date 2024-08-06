<template>
  <ak-tree
    :data="data"
    :showCheckbox="true"
    @change="change"
    v-model="value"
    ref="treeEl"
  />
  <ak-button @click="getValue">getValue</ak-button>
</template>
<script setup>
  import { ref } from 'vue'
  const data = [
    {
      tid: '0',
      id: '1',
      label: '广东',
      children: [
        {
          tid: '1',
          id: '1-1',
          label: '广州',
          children: [
            { label: '天河区', tid: '1-1', id: '1-1-1' },
            { label: '白云区', tid: '1', id: '1-1-2' },
            { label: '越秀区', tid: '1', id: '1-1-3' },
            { label: '海珠区', tid: '1', id: '1-1-4' }
          ]
        },
        { label: '深圳', tid: '1', id: '1-2' },
        { label: '东莞', tid: '1', id: '1-3' },
        { label: '佛山', tid: '1', id: '1-4' }
      ]
    },
    { label: '广西', tid: '0', id: '2' },
    { label: '北京', tid: '0', id: '3' }
  ]
  const change = obj => {
    console.log(obj)
  }

  const treeEl = ref()
  const value = ref([])
  const getValue = () => {
    console.log(treeEl.value.getValue())
  }
</script>
