<template>
  <div class="search">
    <div class="search-input-wrapper">
      <search-input v-model="query"></search-input>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, watch } from 'vue'
import SearchInput from '@/components/search/SearchInput.vue'

export default defineComponent({
  name: 'Search',
  components: { SearchInput },
  setup () {
    const query = ref('')
    watch(query, val => console.log(val))
    return {
      query
    }
  }

})

</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  .search-input-wrapper {
    margin: 20px;
  }
}
</style>
