<template>
    <div>
      <Header />
      <div class="px-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">Title</h2>
          <div class="flex gap-2">
            <button class="border px-4 py-2 rounded flex items-center gap-1">Filter <span>🔽</span></button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded" @click="showModal = true">+ Add New</button>
          </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NoteCard v-for="(note, index) in store.notes" :key="index" :note="note" />
        </div>
      </div>
  
      <AddNoteModal :show="showModal" @close="showModal = false" />
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import NoteCard from '@/components/NoteCard.vue'
  import AddNoteModal from '@/components/AddNoteModal.vue'
  import { useNoteStore } from '@/stores/noteStore'
  
  const store = useNoteStore()
  const showModal = ref(false)
  </script>