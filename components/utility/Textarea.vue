<template>
    <div class="floating-form-control relative">
      <textarea
        :id="id"
        :value="modelValue"
        :placeholder="floating ? ' ' : placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        class="form-textarea"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
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
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
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
    },
    rows: {
      type: Number,
      default: 4
    },
    resize: {
      type: Boolean,
      default: true
    }
  })
  
  defineEmits(['update:modelValue'])
  
  const isFocused = ref(false)
  const hasContent = computed(() => props.modelValue !== '')
  </script>