import { defineStore } from 'pinia'
import card1 from '@/assets/images/card1.jpg';
import card2 from '@/assets/images/card2.jpg';
import card3 from '@/assets/images/card3.jpg';
import card4 from '@/assets/images/card4.jpg';

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: {
      selected: ['Type1', 'Type3'], // Default selected filters
      all: [
        {
          id: 1,
          type: 'Type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card1,
        },
        {
          id: 2,
          type: 'Type3',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        },
        {
          id: 3,
          type: 'Type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card2,
        },
        {
          id: 4,
          type: 'Type3',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        },
        {
          id: 5,
          type: 'Type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card3,
        },
        {
          id: 6,
          type: 'Type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card4,
        },
        {
          id: 7,
          type: 'Type3',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        },
        {
          id: 8,
          type: 'Type2',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        }
      ]
    }
  }),
  actions: {
    addNote(note: any) {
      note.id = this.notes.all.length + 1;
      this.notes.all.push(note)
    },
    getNoteById(id:any) {
      return this.notes.all.find(note => note.id === parseInt(id)) || null
    },
    
    updateNote(updatedNote: any) {
      const index = this.notes.all.findIndex(note => note.id === parseInt(updatedNote.id) )
      if (index !== -1) {
        const updated = { 
          ...this.notes.all[index], // Keep existing properties
          ...updatedNote,          // Apply updates
          // Ensure checklist property name consistency
          checklist: updatedNote.checklistItems || this.notes.all[index].checklist
        }
        
        // Remove the temporary checklistItems if it exists
        if ('checklistItems' in updated) {
          delete updated.checklistItems
        }
        
        this.notes.all[index] = updated
      }
    },
    
    deleteNote(id:any) {
      this.notes.all = this.notes.all.filter(note => note.id !== id)
    },
  },
  getters: {
  }
})