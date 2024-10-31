<template>
  <div>
    <PostSection :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i"/>   
  </div>
</template>

<script>
import PostSection from './PostSection.vue';

export default {
  components : {
    PostSection
  },
  props : {
    게시물 : Array,
  }
}
</script>

<style>

</style>