<template>
    <div class="bg-white rounded-xl shadow p-4 space-y-2">
      <h3 class="font-semibold text-lg">{{ note.title }}</h3>
      <img v-if="note.image" :src="note.image" alt="note image" class="rounded-md w-full object-cover h-40" />
      <p class="text-sm text-gray-600">{{ note.description }}</p>
      <div v-if="note.checklist && note.checklist.length" class="space-y-1">
        <div v-for="(item, i) in note.checklist" :key="i" class="flex items-center space-x-2">
          <input type="checkbox" v-model="item.checked" class="rounded border-gray-300 text-blue-600" />
          <label class="text-sm">{{ item.text }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ note: Object })
  </script>
  