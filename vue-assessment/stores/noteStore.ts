import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNoteStore = defineStore('note', () => {
  const notes = ref([
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Checklist example...',
      checklist: [
        { text: 'Task 1', checked: true },
        { text: 'Task 2', checked: false },
      ],
    },
  ])

  function addNote(note: any) {
    notes.value.push(note)
  }

  return { notes, addNote }
})
