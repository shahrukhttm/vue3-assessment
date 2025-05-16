import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filters', {
  state: () => ({
    filters: {
      types: ['Type1', 'Type2', 'Type3'], // Default selected filters
      allTypes: ['Type1', 'Type2', 'Type3'] // All available types
    },
    showFilters: false
  }),
  actions: {
    toggleFilter(type:any) {
      if (type === 'All') {
        // Toggle all filters
        if (this.filters.types.length === this.filters.allTypes.length) {
          this.filters.types = []
        } else {
          this.filters.types = [...this.filters.allTypes]
        }
      } else {
        // Toggle individual filter
        const index = this.filters.types.indexOf(type)
        if (index === -1) {
          this.filters.types.push(type)
        } else {
          this.filters.types.splice(index, 1)
        }
      }
    },
    toggleFilterDropdown() {
      this.showFilters = !this.showFilters
    }
  },
  getters: {
    isFilterActive: (state) => (type:any) => {
      if (type === 'All') {
        return state.filters.types.length === state.filters.allTypes.length
      }
      return state.filters.types.includes(type)
    }
  }
})