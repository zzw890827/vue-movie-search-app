<template>
  <div>
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Tab from '@/components/tab/Tab'

export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
