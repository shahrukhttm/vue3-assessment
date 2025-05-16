<template>
    <button
        @click="$emit('click')"
        v-bind="$attrs"
        :disabled="disabled"
        :aria-label="ariaLabel"
    >
        <slot />
    </button>
</template>
  
<script setup>
defineOptions({ inheritAttrs: false })

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: 'Button',
  },
})

defineEmits(['click'])
</script>