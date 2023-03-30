import {reactive} from 'vue'

export const store = reactive({
  cardsData: [],
  cardsArchetypes : [],
  searchFilter : {
    num : 20,
    offset : 0,
    archetype: '',
  },
  loading: true,
});