<template>
    <div v-if="show" class="fixed inset-0 bg-[#808080] bg-opacity-50 flex items-center justify-center z-50">
        <div
            class="bg-white rounded-2xl sm:p-[22px] p-4 m-4 w-full max-w-[496px] max-h-[calc(100svh-32px)] overflow-y-auto">
            <div class="mb-[22px] flex items-center gap-4 justify-between">
                <h3 class="text-display-sm font-bold">Create New Cart</h3>
                <UtilityButton @click="emit('close')" ariaLabel="Close modal" >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 28L28 12M28 28L12 12" stroke="#0A0C11" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </UtilityButton>
            </div>
            <div class="flex flex-col gap-4">
                <div :class="['custom-select-box relative', { 'is-open': showOption }, { 'selected': selectedType }]">
                    <div @click="showOption = !showOption"
                        class="custom-select relative pe-10 flex items-center gap-4 justify-between cursor-pointer">
                        <div class="cursor-pointer flex flex-col">
                            <label for="cardType" class="font-bold">Select type of card</label>
                            <span v-if="selectedType">{{ selectedType }}</span>
                        </div>
                        <svg :class="['absolute right-4 top-[50%] translate-y-[-50%] transition', { 'rotate-180': showOption }]"
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.5L8 10.5L3 5.5" stroke="#0A0C11" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <ul v-if="showOption"
                        class="filter-dropdown absolute w-full mt-[6px] bg-white rounded-2xl shadow-400 z-10 overflow-hidden">
                        <li v-for="type in filterStore.filters.types" :key="type"
                            class="py-[15px] px-4 cursor-pointer hover:bg-gray-100"
                            :class="[{ 'selected': selectedType.toLocaleLowerCase() == type.toLocaleLowerCase() }]"
                            @click="selectType(type)">
                            {{ type }}
                        </li>
                    </ul>
                </div>

                <!-- Common Fields (Header and Description) -->
                <UtilityInput id="header" label="header" v-model="title" />

                <!-- Type 1 Specific Fields -->
                <template v-if="selectedType === 'Type1'">
                    <div class="form-control">
                        <input type="file" name="image" id="image" class="hidden" @change="handleImageUpload"
                            accept="image/jpeg, image/png, image/gif, image/svg+xml, image/webp">
                        <label for="image"
                            class="flex flex-col items-center justify-center gap-4 text-center cursor-pointer border border-blue rounded-2xl p-6 bg-dark-100">
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
                        </label>
                    </div>
                </template>

                <UtilityTextarea
                id="description"
                label="Description"
                v-model="description"
                />

                <!-- Type 3 Specific Fields -->
                <template v-if="selectedType === 'Type3'">
                    <div>
                        <span class="font-bold mb-4 block">Add option</span>
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

                <div class="mt-[6px] pt-[22px] border-t border-dashed border-dark-400">
                    <UtilityButton @click="addNote" class="btn btn-primary w-full" :disabled="!isFormValid" >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.25 8H3.25M8.25 3V13" stroke="white" stroke-width="2.3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Create</span>
                    </UtilityButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFilterStore } from '@/stores/filters'
import { useNotesStore } from '~/stores/notes'

const showOption = ref(false)
const selectedType = ref('')
const filterStore = useFilterStore()

const props = defineProps({ show: Boolean })
const emit = defineEmits(['close'])

const title = ref('')
const description = ref('')
const image = ref('')
const checklistItems = ref([{ text: '', checked: false }])

const store = useNotesStore()

function selectType(type) {
    selectedType.value = type
    showOption.value = false
}

function addChecklistItem() {
    checklistItems.value.push({ text: '', checked: false })
}

function removeChecklistItem(index) {
    if (checklistItems.value.length > 1) {
        checklistItems.value.splice(index, 1)
    } else {
        checklistItems.value[0].text = ''
    }
}

function handleImageUpload(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            image.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const isFormValid = computed(() => {
    if (!selectedType.value || !title.value || !description.value) return false

    if (selectedType.value === 'Type3') {
        return checklistItems.value.every(item => item.text.trim() !== '')
    }

    return true
})

function addNote() {
    let newNote = {
        type: selectedType.value.toLowerCase(),
        title: title.value,
        description: description.value
    }

    if (selectedType.value === 'Type1') {
        newNote.image = image.value
    } else if (selectedType.value === 'Type3') {
        newNote.checklist = checklistItems.value
            .filter(item => item.text.trim() !== '')
            .map(item => ({
                text: item.text,
                checked: item.checked
            }))
    }

    store.addNote(newNote)
    resetForm()
    emit('close')
}

function resetForm() {
    title.value = ''
    description.value = ''
    image.value = ''
    selectedType.value = ''
    checklistItems.value = [{ text: '', checked: false }]
}
</script>