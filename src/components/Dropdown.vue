<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light dropdown-toggle my-2" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" v-if="isOpen" :style="{display: 'block'}">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue'
import userClickOutside from "@/hooks/UserClickOutside";

export default defineComponent({
  name: "Dropdown",
  props: {
    title: String
  },
  setup() {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutside = userClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style scoped>

</style>
