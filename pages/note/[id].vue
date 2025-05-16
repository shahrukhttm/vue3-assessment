<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl sm:p-[22px] p-4 w-full max-w-[496px]">
            <div class="mb-[22px] flex items-center gap-4 justify-between">
                <h3 class="text-display-sm font-bold">Edit Cart</h3>
                <nuxt-link to="/" class="bg-blue-100 text-blue rounded-full p-1 flex items-center justify-center">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </nuxt-link>
            </div>
            <div v-if="error" class="text-red-600 mb-4">{{ error }}</div>
            <div v-else-if="note" class="flex flex-col gap-4">
                <!-- Type Selector -->
                <div class="relative">
                    <div 
                        class="custom-select relative pe-10 flex items-center gap-4 justify-between cursor-pointer border border-gray-300 rounded-lg p-3"
                        @click="showTypeDropdown = !showTypeDropdown"
                    >
                        <div class="cursor-pointer flex flex-col">
                            <label class="font-bold">Select type of card</label>
                            <span>{{ selectedType || 'Select a type' }}</span>
                        </div>
                        <svg 
                            :class="['absolute right-4 top-[50%] translate-y-[-50%] transition', { 'rotate-180': showTypeDropdown }]"
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.5L8 10.5L3 5.5" stroke="#0A0C11" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <ul 
                        v-if="showTypeDropdown"
                        class="filter-dropdown absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 overflow-hidden border border-gray-200"
                    >
                        <li v-for="type in filterStore.filters.types" :key="type"
                            class="py-3 px-4 cursor-pointer hover:bg-gray-100"
                            :class="{ 'bg-gray-100': selectedType === type }"
                            @click="selectType(type)">
                            {{ type }}
                        </li>
                    </ul>
                </div>

                <!-- Common Fields (Header and Description) -->
                <div class="floating-form-control">
                    <input v-model="title" type="text" name="header" id="header" placeholder="Header"
                        class="form-input">
                    <label for="header" class="form-label">Header</label>
                </div>

                <!-- Type 1 Specific Fields -->
                <template v-if="selectedType === 'Type1'">
                    <div class="form-control">
                        <input type="file" name="image" id="image" class="hidden" @change="handleImageUpload"
                            accept="image/jpeg, image/png, image/gif, image/svg+xml, image/webp">
                        <label for="image"
                            class="flex flex-col items-center justify-center gap-4 text-center cursor-pointer border border-blue rounded-2xl p-6 bg-dark-100">
                            <img v-if="image" :src="image" alt="Uploaded Image" class="mt-4 max-w-full h-auto" />
                            <template v-else>
                                <span
                                class="w-[40px] h-[40px] min-w-[40px] rounded-lg bg-blue inline-flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.66602 13.3333L9.99935 10M9.99935 10L13.3327 13.3333M9.99935 10V17.5M16.666 13.9524C17.6839 13.1117 18.3327 11.8399 18.3327 10.4167C18.3327 7.88536 16.2807 5.83333 13.7493 5.83333C13.5673 5.83333 13.3969 5.73833 13.3044 5.58145C12.2177 3.73736 10.2114 2.5 7.91602 2.5C4.46424 2.5 1.66602 5.29822 1.66602 8.75C1.66602 10.4718 2.36222 12.0309 3.48847 13.1613"
                                            stroke="white" stroke-width="1.66667" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <div>
                                    <p class="mb-1"><span class="text-blue fw-medium">Click to upload</span> or drag and
                                        drop</p>
                                    <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </div>
                            </template>
                        </label>
                    </div>
                </template>

                <div class="floating-form-control">
                    <textarea v-model="description" name="description" id="description" rows="4"
                        placeholder="Description" class="form-textarea min-h-[128px]"></textarea>
                    <label for="description" class="form-label">Description</label>
                </div>

                <!-- Type 3 Specific Fields -->
                <template v-if="selectedType === 'Type3'">
                    <div>
                        <span class="font-bold mb-4 block">Edit options</span>
                        <ul class="flex flex-col gap-2">
                            <li v-for="(item, index) in checklistItems" :key="index"
                                class="flex items-center gap-[10px]">
                                <div class="form-control w-full">
                                    <input v-model="item.text" type="text" :name="'checklistItem' + index"
                                        :id="'checklistItem' + index" placeholder="Checklist item"
                                        class="form-input bg-dark-100 w-full px-4 py-[14px] rounded-2xl border border-transparent placeholder:text-dark-950">
                                </div>
                                <UtilityButton @click="removeChecklistItem(index)" >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 20.625C5.6925 20.625 1.375 16.3075 1.375 11C1.375 5.6925 5.6925 1.375 11 1.375C16.3075 1.375 20.625 5.6925 20.625 11C20.625 16.3075 16.3075 20.625 11 20.625ZM11 2.75C6.44875 2.75 2.75 6.44875 2.75 11C2.75 15.5512 6.44875 19.25 11 19.25C15.5512 19.25 19.25 15.5512 19.25 11C19.25 6.44875 15.5512 2.75 11 2.75Z"
                                            fill="black" />
                                        <path
                                            d="M15.125 11.6875H6.875C6.49 11.6875 6.1875 11.385 6.1875 11C6.1875 10.615 6.49 10.3125 6.875 10.3125H15.125C15.51 10.3125 15.8125 10.615 15.8125 11C15.8125 11.385 15.51 11.6875 15.125 11.6875Z"
                                            fill="black" />
                                    </svg>
                                </UtilityButton>
                            </li>
                            <li>
                                <UtilityButton @click="addChecklistItem" class="btn btn-success w-full" >
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.25 8H3.25M8.25 3V13" stroke="white" stroke-width="2.3"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Add option</span>
                                </UtilityButton>
                            </li>
                        </ul>
                    </div>
                </template>

                <div class="flex gap-3 mt-[6px] pt-[22px] border-t border-dashed border-dark-400">
                    <UtilityButton @click="confirmDelete"  class="btn btn-danger-light w-full" >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4663_329)"><path d="M2.88889 14.2222C2.88889 15.2 3.68889 16 4.66667 16H11.7778C12.7556 16 13.5556 15.2 13.5556 14.2222V6.33333C13.5556 5.35556 12.7556 4.55556 11.7778 4.55556H4.66667C3.68889 4.55556 2.88889 5.35556 2.88889 6.33333V14.2222ZM13.5556 0.888889H11.3333L10.7022 0.257778C10.5422 0.0977777 10.3111 0 10.08 0H6.36444C6.13333 0 5.90222 0.0977777 5.74222 0.257778L5.11111 0.888889H2.88889C2.4 0.888889 2 1.28889 2 1.77778C2 2.26667 2.4 2.66667 2.88889 2.66667H13.5556C14.0444 2.66667 14.4444 2.26667 14.4444 1.77778C14.4444 1.28889 14.0444 0.888889 13.5556 0.888889Z" fill="#F9261A"/></g><defs><clipPath id="clip0_4663_329"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                        <span>Delete</span>
                    </UtilityButton>
                    <UtilityButton @click="updateNote"  class="btn btn-primary w-full" :disabled="!isFormValid" >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4663_143)"><mask id="path-1-inside-1_4663_143" fill="white"><path d="M11.1667 5.33333H2.27778V1.77778H11.1667M8.5 14.2222C7.79276 14.2222 7.11448 13.9413 6.61438 13.4412C6.11428 12.9411 5.83333 12.2628 5.83333 11.5556C5.83333 10.8483 6.11428 10.17 6.61438 9.66994C7.11448 9.16984 7.79276 8.88889 8.5 8.88889C9.20724 8.88889 9.88552 9.16984 10.3856 9.66994C10.8857 10.17 11.1667 10.8483 11.1667 11.5556C11.1667 12.2628 10.8857 12.9411 10.3856 13.4412C9.88552 13.9413 9.20724 14.2222 8.5 14.2222ZM12.9444 0H2.27778C1.80628 0 1.3541 0.187301 1.0207 0.520699C0.687301 0.854097 0.5 1.30628 0.5 1.77778V14.2222C0.5 14.6937 0.687301 15.1459 1.0207 15.4793C1.3541 15.8127 1.80628 16 2.27778 16H14.7222C15.1937 16 15.6459 15.8127 15.9793 15.4793C16.3127 15.1459 16.5 14.6937 16.5 14.2222V3.55556L12.9444 0Z"/></mask><path d="M11.1667 5.33333H2.27778V1.77778H11.1667M8.5 14.2222C7.79276 14.2222 7.11448 13.9413 6.61438 13.4412C6.11428 12.9411 5.83333 12.2628 5.83333 11.5556C5.83333 10.8483 6.11428 10.17 6.61438 9.66994C7.11448 9.16984 7.79276 8.88889 8.5 8.88889C9.20724 8.88889 9.88552 9.16984 10.3856 9.66994C10.8857 10.17 11.1667 10.8483 11.1667 11.5556C11.1667 12.2628 10.8857 12.9411 10.3856 13.4412C9.88552 13.9413 9.20724 14.2222 8.5 14.2222ZM12.9444 0H2.27778C1.80628 0 1.3541 0.187301 1.0207 0.520699C0.687301 0.854097 0.5 1.30628 0.5 1.77778V14.2222C0.5 14.6937 0.687301 15.1459 1.0207 15.4793C1.3541 15.8127 1.80628 16 2.27778 16H14.7222C15.1937 16 15.6459 15.8127 15.9793 15.4793C16.3127 15.1459 16.5 14.6937 16.5 14.2222V3.55556L12.9444 0Z" fill="white"/><path d="M2.27778 5.33333H1.27778V6.33333H2.27778V5.33333ZM2.27778 1.77778V0.777778H1.27778V1.77778H2.27778ZM8.5 14.2222V15.2222V14.2222ZM8.5 8.88889V7.88889V8.88889ZM12.9444 0L13.6516 -0.707107L13.3587 -1H12.9444V0ZM2.27778 0V-1V0ZM0.5 1.77778H-0.5H0.5ZM0.5 14.2222H-0.5H0.5ZM16.5 3.55556H17.5V3.14134L17.2071 2.84845L16.5 3.55556ZM11.1667 5.33333V4.33333H2.27778V5.33333V6.33333H11.1667V5.33333ZM2.27778 5.33333H3.27778V1.77778H2.27778H1.27778V5.33333H2.27778ZM2.27778 1.77778V2.77778H11.1667V1.77778V0.777778H2.27778V1.77778ZM8.5 14.2222V13.2222C8.05797 13.2222 7.63405 13.0466 7.32149 12.7341L6.61438 13.4412L5.90727 14.1483C6.59491 14.8359 7.52754 15.2222 8.5 15.2222V14.2222ZM6.61438 13.4412L7.32149 12.7341C7.00893 12.4215 6.83333 11.9976 6.83333 11.5556H5.83333H4.83333C4.83333 12.528 5.21964 13.4606 5.90727 14.1483L6.61438 13.4412ZM5.83333 11.5556H6.83333C6.83333 11.1135 7.00893 10.6896 7.32149 10.377L6.61438 9.66994L5.90727 8.96283C5.21964 9.65046 4.83333 10.5831 4.83333 11.5556H5.83333ZM6.61438 9.66994L7.32149 10.377C7.63405 10.0645 8.05797 9.88889 8.5 9.88889V8.88889V7.88889C7.52754 7.88889 6.59491 8.2752 5.90727 8.96283L6.61438 9.66994ZM8.5 8.88889V9.88889C8.94203 9.88889 9.36595 10.0645 9.67851 10.377L10.3856 9.66994L11.0927 8.96283C10.4051 8.2752 9.47246 7.88889 8.5 7.88889V8.88889ZM10.3856 9.66994L9.67851 10.377C9.99107 10.6896 10.1667 11.1135 10.1667 11.5556H11.1667H12.1667C12.1667 10.5831 11.7804 9.65046 11.0927 8.96283L10.3856 9.66994ZM11.1667 11.5556H10.1667C10.1667 11.9976 9.99107 12.4215 9.67851 12.7341L10.3856 13.4412L11.0927 14.1483C11.7804 13.4606 12.1667 12.528 12.1667 11.5556H11.1667ZM10.3856 13.4412L9.67851 12.7341C9.36595 13.0466 8.94203 13.2222 8.5 13.2222V14.2222V15.2222C9.47246 15.2222 10.4051 14.8359 11.0927 14.1483L10.3856 13.4412ZM12.9444 0V-1H2.27778V0V1H12.9444V0ZM2.27778 0V-1C1.54107 -1 0.834527 -0.707342 0.313592 -0.186408L1.0207 0.520699L1.72781 1.22781C1.87367 1.08194 2.0715 1 2.27778 1V0ZM1.0207 0.520699L0.313592 -0.186408C-0.207342 0.334527 -0.5 1.04107 -0.5 1.77778H0.5H1.5C1.5 1.5715 1.58194 1.37367 1.72781 1.22781L1.0207 0.520699ZM0.5 1.77778H-0.5V14.2222H0.5H1.5V1.77778H0.5ZM0.5 14.2222H-0.5C-0.5 14.9589 -0.207342 15.6655 0.313592 16.1864L1.0207 15.4793L1.72781 14.7722C1.58194 14.6263 1.5 14.4285 1.5 14.2222H0.5ZM1.0207 15.4793L0.313592 16.1864C0.834526 16.7073 1.54106 17 2.27778 17V16V15C2.0715 15 1.87367 14.9181 1.72781 14.7722L1.0207 15.4793ZM2.27778 16V17H14.7222V16V15H2.27778V16ZM14.7222 16V17C15.4589 17 16.1655 16.7073 16.6864 16.1864L15.9793 15.4793L15.2722 14.7722C15.1263 14.9181 14.9285 15 14.7222 15V16ZM15.9793 15.4793L16.6864 16.1864C17.2073 15.6655 17.5 14.9589 17.5 14.2222H16.5H15.5C15.5 14.4285 15.4181 14.6263 15.2722 14.7722L15.9793 15.4793ZM16.5 14.2222H17.5V3.55556H16.5H15.5V14.2222H16.5ZM16.5 3.55556L17.2071 2.84845L13.6516 -0.707107L12.9444 0L12.2373 0.707107L15.7929 4.26266L16.5 3.55556Z" fill="white" mask="url(#path-1-inside-1_4663_143)"/></g><defs><clipPath id="clip0_4663_143"><rect width="16" height="16" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                        <span>Save</span>
                    </UtilityButton>
                </div>
                <!-- Add the confirmation dialog -->
                <CommonConfirmationDialog
                    v-if="showDeleteConfirmation"
                    title="Delete Note"
                    message="Are you sure you want to delete this note?"
                    @confirm="deleteNote"
                    @cancel="showDeleteConfirmation = false"
                />
            </div>
            <div v-else class="text-center">Loading...</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFilterStore } from '~/stores/filters'
import { useNotesStore } from '~/stores/notes'

// Add these to your existing script
const showDeleteConfirmation = ref(false)

// Metadata for the layout
definePageMeta({
    layout: 'default'
})

const route = useRoute()
const router = useRouter()
const id = route.params.id

const filterStore = useFilterStore()
const notesStore = useNotesStore()

const selectedType = ref('')
const title = ref('')
const description = ref('')
const image = ref('')
const checklistItems = ref([])
const error = ref('')
const note = ref(null)
const showTypeDropdown = ref(false)

// Fetch note data
onMounted(() => {
    const noteData = notesStore.getNoteById(id)

    if (!noteData) {
        error.value = 'Note not found'
        return
    }
    
    noteData.type = capitalizeFirstLetter(noteData.type)
    note.value = { ...noteData }

    // Initialize form fields
    selectedType.value = note.value.type || ''
    title.value = note.value.title || ''
    description.value = note.value.description || ''
    image.value = note.value.image || ''
    
    // Initialize checklist items if they exist
    if (note.value.type === 'Type3' && Array.isArray(note.value.checklist)) {
        checklistItems.value = [...note.value.checklist]
    } else {
        checklistItems.value = [{ text: '', checked: false }]
    }
})

const confirmDelete = () => {
    console.log('test ');
  showDeleteConfirmation.value = true
}

const deleteNote = async () => {
  try {
    console.log('here ', id);
    await notesStore.deleteNote(parseInt(id))
    router.push('/') // Redirect after deletion
  } catch (err) {
    error.value = 'Failed to delete note: ' + err.message
    console.error('Delete error:', err)
  } finally {
    showDeleteConfirmation.value = false
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function selectType(type) {
    selectedType.value = type
    showTypeDropdown.value = false
    
    // Reset type-specific fields when type changes
    if (type !== 'Type1') {
        image.value = ''
    }
    if (type !== 'Type3') {
        checklistItems.value = [{ text: '', checked: false }]
    }
}

function addChecklistItem() {
    checklistItems.value.push({ text: '', checked: false })
}

function removeChecklistItem(index) {
    if (checklistItems.value.length > 1) {
        checklistItems.value.splice(index, 1)
    }
}

function handleImageUpload(event) {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
        image.value = e.target.result
    }
    reader.readAsDataURL(file)
}

const isFormValid = computed(() => {
    const hasTitle = title.value.trim() !== ''
    const hasDescription = description.value.trim() !== ''
    const hasType = selectedType.value !== ''
    
    // Additional validation for type3
    if (selectedType.value === 'Type3') {
        const hasValidChecklist = checklistItems.value.some(item => item.text.trim() !== '')
        return hasTitle && hasDescription && hasType && hasValidChecklist
    }
    
    return hasTitle && hasDescription && hasType
})

function updateNote() {
    if (!note.value || !isFormValid.value) return
    
    const updatedNote = {
        id: note.value.id,
        type: selectedType.value.toLowerCase(),
        title: title.value,
        description: description.value
    }
    
    // Add type-specific fields
    if (selectedType.value === 'Type1') {
        updatedNote.image = image.value
    } 
    else if (selectedType.value === 'Type3') {
        updatedNote.checklistItems = checklistItems.value
            .filter(item => item.text.trim() !== '')
            .map(item => ({
                text: item.text,
                checked: item.checked || false
            }))
    }

    try {
        notesStore.updateNote(updatedNote)
        router.push('/')
    } catch (err) {
        error.value = 'Failed to update note: ' + err.message
        console.error('Update error:', err)
    }
}
</script>