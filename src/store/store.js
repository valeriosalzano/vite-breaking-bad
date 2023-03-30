import {reactive} from 'vue'

export const store = reactive({
  cardsData: [],
  cardsArchetypes : [],
  searchFilter : {
    archetype: '',
  },
  loading: true,
});