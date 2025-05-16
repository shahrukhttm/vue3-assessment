<template>
  <div v-for="(note, key) in filteredNotes" :key="note.id" class="bg-white rounded-2xl sm:p-[22px] p-4 flex flex-col sm:gap-[22px] gap-4">
      <NuxtLink :to="`/note/${note.id}`">
          <h3 class="font-semibold text-[17px]/[22px]">
              {{ note.title }}
          </h3>
      </NuxtLink>
      <img v-if="note.type.toLocaleLowerCase() == 'type1' && note.image"
          :src="note.image"
          alt="note image"
          class="w-full bg-[#D9D9D9] rounded-xl aspect-video object-cover"
      />
      
      <p v-if="note.description" class="whitespace-pre-line">{{ note.description }}</p>

      <ul v-if="note.checklist" class="flex flex-col gap-3">
          <li v-for="(item, i) in note.checklist" :key="i">
              <div class="flex items-start gap-2">
                  <input 
                      type="checkbox" 
                      :id="'check'+key+i" 
                      class="custom-checkbox" 
                  />
                  <label :for="'check'+key+i" class="cursor-pointer">
                      {{ item.text }}
                  </label>
              </div>
          </li>
      </ul>
  </div>
</template>
<script setup>
const props = defineProps({
    filteredNotes: Array
})
</script>