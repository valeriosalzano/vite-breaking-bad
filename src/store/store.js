import {reactive} from 'vue'

export const store = reactive({
  cardsData: [],
  cardsArchetypes : [],
  searchFilter : {
    archetype: '',
    num : 24,
    offset : 0,
  },
  loading: true,
});