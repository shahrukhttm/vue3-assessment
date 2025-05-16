<template>
    <div class="relative">
      <div
        @click="showOptions = !showOptions"
        class="custom-select relative pe-10 flex items-center gap-4 justify-between cursor-pointer border border-gray-300 rounded-lg p-3"
      >
        <div class="cursor-pointer flex flex-col">
          <label class="font-bold">{{ label }}</label>
          <span v-if="modelValue">{{ modelValue }}</span>
          <span v-else class="text-gray-400">Select an option</span>
        </div>
        <svg
          :class="['absolute right-4 top-[50%] translate-y-[-50%] transition', { 'rotate-180': showOptions }]"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5.5L8 10.5L3 5.5"
            stroke="#0A0C11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <ul
        v-if="showOptions"
        class="filter-dropdown absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 overflow-hidden border border-gray-200"
      >
        <li
          v-for="option in options"
          :key="option"
          class="py-3 px-4 cursor-pointer hover:bg-gray-100"
          :class="{ 'bg-gray-100': modelValue === option }"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    label: String,
    modelValue: String,
    options: {
      type: Array,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const showOptions = ref(false)
  
  const selectOption = (option) => {
    emit('update:modelValue', option)
    showOptions.value = false
  }
  </script>
