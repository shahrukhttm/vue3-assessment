<template>
    <div class="p-4 bg-white shadow rounded-md mb-3 flex justify-between items-start">
      <p class="text-gray-800 whitespace-pre-wrap">{{ note.content }}</p>
      <button @click="$emit('delete')" class="text-red-500 hover:text-red-700 text-sm">Delete</button>
    </div>
</template>
  
<script setup>
  defineProps({
    note: Object
  })
  defineEmits(['delete'])
</script>
  