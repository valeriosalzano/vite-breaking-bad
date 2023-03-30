import {reactive} from 'vue'

export const store = reactive({
  cardsData: [],
  cardsArchetypes : [],
  searchFilter : {
    archetype: '',
    num : 20,
    offset : 0,
  },
  loading: true,
});