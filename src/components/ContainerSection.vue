<template>
  <div>
    <div v-if="step == 0">
      <PostSection :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i"/>
    </div>
    
    <div v-if="step == 1">
      <div :class="selectfilter" class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <FilterBox :filter="filter" :image="image" v-for="filter in filters" :key="filter">
          {{ filter }}
        </FilterBox>
      </div>
    </div>

    <div v-if="step == 2">
      <div :class="selectfilter" class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)"
        class="write-box">글을 작성해 주세요</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
import PostSection from './PostSection.vue';

export default {
  data(){
    return {
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", 
                  "earlybird", "gingham", "hudson", "inkwell", "kelvin", 
                  "lark", "lofi", "maven", "mayfair", "moon", "nashville", 
                  "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", 
                  "valencia", "walden", "willow", "xpro2"
                ],
      selectfilter : '',          
    }
  },
  mounted(){
    this.emitter.on('boxclick', (a) => {
      this.selectfilter = a
    })
  },
  components : {
    PostSection,
    FilterBox,
  },
  props : {
    게시물 : Array,
    step : Number,
    image : String,
  }
}
</script>

<style>
  .upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
  }
  .filters{
    overflow-x:scroll;
    white-space: nowrap;
  }
  .filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
  }
    .filters::-webkit-scrollbar {
    height: 5px;
  }
    .filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  .filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
  }
  .filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
  }
</style>