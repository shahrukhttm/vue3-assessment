<template>
    <div v-if="show" class="fixed inset-0 bg-[#808080] bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl sm:p-[22px] p-4 m-4 w-full max-w-[496px] max-h-[calc(100svh-32px)] overflow-y-auto">
        <div class="mb-[22px] flex items-center gap-4 justify-between">
            <h3 class="text-display-sm font-bold">Create New Cart</h3>
            <button @click="emit('close')">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 28L28 12M28 28L12 12" stroke="#0A0C11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        </div>
        <!-- <div class="space-y-3">
            <input v-model="title" type="text" placeholder="Title" class="w-full p-2 border rounded" />
            <textarea v-model="description" placeholder="Description" class="w-full p-2 border rounded" />
            <input v-model="image" type="text" placeholder="Image URL" class="w-full p-2 border rounded" />
            <button @click="addNote" class="px-4 py-2 rounded">Add</button>
        </div> -->
        <div class="flex flex-col gap-4">
            <!-- <div class="floating-form-control">
                <select name="cardType" id="cardType" class="form-select">
                    <option value="Text Placeholder">Text Placeholder</option>
                    <option value="Text Placeholder">Text Placeholder</option>
                    <option value="Text Placeholder">Text Placeholder</option>
                </select>
                <label for="cardType" class="form-label">Select type of card</label>
            </div> -->
            <div :class="['custom-select-box relative selected', { 'is-open': showOption }]">
                <div @click="showOption = !showOption" class="custom-select relative pe-10 flex items-center gap-4 justify-between cursor-pointer">
                    <div class="cursor-pointer flex flex-col">
                        <label for="cardType" class="font-bold">Select type of card</label>
                        <span>Text Placeholder</span>
                    </div>
                    <svg :class="['absolute right-4 top-[50%] translate-y-[-50%] transition', {'rotate-180': showOption}]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 5.5L8 10.5L3 5.5" stroke="#0A0C11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <ul v-if="showOption" class="filter-dropdown absolute w-full mt-[6px] bg-white rounded-2xl shadow-400 z-10 overflow-hidden">
                    <li class="py-[15px] px-4 cursor-pointer">Text Placeholder</li>
                    <li class="py-[15px] px-4 cursor-pointer selected">Text Placeholder</li>
                    <li class="py-[15px] px-4 cursor-pointer">Text Placeholder</li>
                </ul>
            </div>
            <div class="floating-form-control">
                <input type="text" name="header" id="header" placeholder="Header" class="form-input">
                <label for="header" class="form-label">Header</label>
            </div>
            <div class="form-control">
                <input type="file" name="image" id="image" class="hidden">
                <label for="image" class="flex flex-col items-center justify-center gap-4 text-center cursor-pointer border border-blue rounded-2xl p-6 bg-dark-100">
                    <span class="w-[40px] h-[40px] min-w-[40px] rounded-lg bg-blue inline-flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66602 13.3333L9.99935 10M9.99935 10L13.3327 13.3333M9.99935 10V17.5M16.666 13.9524C17.6839 13.1117 18.3327 11.8399 18.3327 10.4167C18.3327 7.88536 16.2807 5.83333 13.7493 5.83333C13.5673 5.83333 13.3969 5.73833 13.3044 5.58145C12.2177 3.73736 10.2114 2.5 7.91602 2.5C4.46424 2.5 1.66602 5.29822 1.66602 8.75C1.66602 10.4718 2.36222 12.0309 3.48847 13.1613" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                    <div>
                        <p class="mb-1"><span class="text-blue fw-medium">Click to upload</span> or drag and drop</p>
                        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                </label>
            </div>
            <div class="floating-form-control">
                <textarea name="description" id="description" rows="4" placeholder="Description" class="form-textarea min-h-[128px]"></textarea>
                <label for="description" class="form-label">Description</label>
            </div>
            <div>
                <span class="font-bold mb-4 block">Add option</span>
                <ul class="flex flex-col gap-2">
                    <li class="flex items-center gap-[10px]">
                        <div class="form-control w-full">
                            <input type="text" name="addOption" id="addOption" placeholder="Text Placeholder" class="form-input bg-dark-100 w-full px-4 py-[14px] rounded-2xl border border-transparent placeholder:text-dark-950">
                        </div>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20.625C5.6925 20.625 1.375 16.3075 1.375 11C1.375 5.6925 5.6925 1.375 11 1.375C16.3075 1.375 20.625 5.6925 20.625 11C20.625 16.3075 16.3075 20.625 11 20.625ZM11 2.75C6.44875 2.75 2.75 6.44875 2.75 11C2.75 15.5512 6.44875 19.25 11 19.25C15.5512 19.25 19.25 15.5512 19.25 11C19.25 6.44875 15.5512 2.75 11 2.75Z" fill="black"/><path d="M15.125 11.6875H6.875C6.49 11.6875 6.1875 11.385 6.1875 11C6.1875 10.615 6.49 10.3125 6.875 10.3125H15.125C15.51 10.3125 15.8125 10.615 15.8125 11C15.8125 11.385 15.51 11.6875 15.125 11.6875Z" fill="black"/></svg>
                    </li>
                    <li class="flex items-center gap-[10px]">
                        <div class="form-control w-full">
                            <input type="text" name="addOption" id="addOption" placeholder="Text Placeholder" class="form-input bg-dark-100 w-full px-4 py-[14px] rounded-2xl border border-transparent placeholder:text-dark-950">
                        </div>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20.625C5.6925 20.625 1.375 16.3075 1.375 11C1.375 5.6925 5.6925 1.375 11 1.375C16.3075 1.375 20.625 5.6925 20.625 11C20.625 16.3075 16.3075 20.625 11 20.625ZM11 2.75C6.44875 2.75 2.75 6.44875 2.75 11C2.75 15.5512 6.44875 19.25 11 19.25C15.5512 19.25 19.25 15.5512 19.25 11C19.25 6.44875 15.5512 2.75 11 2.75Z" fill="black"/><path d="M15.125 11.6875H6.875C6.49 11.6875 6.1875 11.385 6.1875 11C6.1875 10.615 6.49 10.3125 6.875 10.3125H15.125C15.51 10.3125 15.8125 10.615 15.8125 11C15.8125 11.385 15.51 11.6875 15.125 11.6875Z" fill="black"/></svg>
                    </li>
                    <li>
                        <button class="btn btn-success w-full">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 8H3.25M8.25 3V13" stroke="white" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Add option</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <button class="btn btn-primary w-full" disabled>
                    Create
                </button>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useNoteStore } from '@/stores/noteStore'
  
  const showOption = ref(false)

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
  