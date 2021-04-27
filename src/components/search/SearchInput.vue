<template>
  <div class="search-input">
    <font-awesome-icon
        class="icon-search"
        icon="search">
    </font-awesome-icon>
    <input class="input-inner"
           placeholder="Search Movie"
           v-model="query"
    />
    <font-awesome-icon
        v-show="query"
        class="icon-dismiss"
        icon="times"
        @click="clear"
    >
    </font-awesome-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { debounce } from 'throttle-debounce'

export default defineComponent({
  name: 'search-input',
  props: {
    modelValue: String
  },
  data () {
    return {
      query: this.modelValue
    }
  },
  created () {
    this.$watch('query', debounce(300, newQuery => this.$emit('update:modelValue', newQuery.trim())))
    // eslint-disable-next-line no-return-assign
    this.$watch('modelValue', (newQuery: string) => this.query = newQuery)
  },
  methods: {
    clear () {
      this.query = ''
    }
  }
})
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 32px;
  background: $color-highlight-background;
  border-radius: 6px;

  .icon-search {
    font-size: 24px;
    color: $color-text-d;
  }

  .input-inner {
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    border: 0;
    background: $color-highlight-background;
    color: $color-text;
    font-size: $font-size-medium;
    outline: 0;

    &::placeholder {
      color: $color-text-d;
    }
  }

  .icon-dismiss {
    font-size: 16px;
    color: $color-text-d;
  }
}
</style>
