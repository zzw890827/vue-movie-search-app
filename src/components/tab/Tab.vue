<template>
  <div class="tab">
    <router-link
        class="tab-item"
        v-for="tab in tabList"
        :key="tab.path"
        :to="tab.path"
    >
      <span class="tab-link"> {{ tab.name }} </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tab',
  data () {
    return {
      tabList: [
        {
          name: 'Search',
          path: '/search'
        },
        {
          name: 'Detail',
          path: '/detail'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: $color-text-l;
    }

    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }

}

</style>
