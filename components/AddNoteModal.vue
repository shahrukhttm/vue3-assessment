<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-96">
        <h2 class="text-lg font-semibold mb-4">Add New Note</h2>
        <div class="space-y-3">
          <input v-model="title" type="text" placeholder="Title" class="w-full p-2 border rounded" />
          <textarea v-model="description" placeholder="Description" class="w-full p-2 border rounded" />
          <input v-model="image" type="text" placeholder="Image URL" class="w-full p-2 border rounded" />
          <button @click="addNote" class="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNoteStore } from '@/stores/noteStore'
  
  const props = defineProps({ show: Boolean })
  const emit = defineEmits(['close'])
  
  const title = ref('')
  const description = ref('')
  const image = ref('')
  
  const store = useNoteStore()
  
  function addNote() {
    store.addNote({ title: title.value, description: description.value, image: image.value })
    emit('close')
  }
  </script>
  