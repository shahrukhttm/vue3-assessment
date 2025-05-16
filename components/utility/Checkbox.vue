<template>
    <div class="checkbox-wrapper flex items-center">
      <input
        type="checkbox"
        :id="computedId"
        class="custom-checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="$emit('change', $event.target.checked)"
      />
      <label :for="computedId" class="cursor-pointer ml-2">
        <slot>{{ label }}</slot>
      </label>
    </div>
  </template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['change'])

const computedId = computed(() => {
  return props.id || `filter${props.type}`
})
</script>