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
          type: 'type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card1,
        },
        {
          type: 'type3',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        },
        {
          type: 'type4',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        },
        {
          type: 'type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card2,
        },
        {
          type: 'type3',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        },
        {
          type: 'type2',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card3,
        },
        {
          type: 'type2',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: card4,
        },
        {
          type: 'type1',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Checklist example...',
          checklist: [
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: true },
            { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`, checked: false },
          ],
        }
      ]
    }
  }),
  actions: {
    addNote(note: any) {
      this.notes.all.push(note)
    }
  },
  getters: {
  }
})