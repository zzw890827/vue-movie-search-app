<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Movie Finder</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})

</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;

  .icon {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('logo.jpg');
    background-size: 30px 32px;
  }

  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>
