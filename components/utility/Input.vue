<template>
    <div class="floating-form-control relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="floating ? ' ' : placeholder"
        :required="required"
        :disabled="disabled"
        class="form-input"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <label 
        :for="id" 
        class="form-label"
        :class="{
          'floating-label': floating,
          'filled': hasContent || isFocused
        }"
      >
        {{ label }}
      </label>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  floating: {
    type: Boolean,
    default: true
  }
})

defineEmits(['update:modelValue'])

const isFocused = ref(false)
const hasContent = computed(() => props.modelValue !== '')
</script>