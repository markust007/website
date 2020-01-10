<template>
  <div id="card-big">
    <button @click="close" class="close"><i class="fa fa-times" aria-hidden="true"></i></button>
    <button class="prev" @click="prev" v-show="!id == 0"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
    <button class="next" @click="next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
    <div class="card-big">
      <div class="inner">
        <h4 class="main-title mb-4">{{items.title}}</h4>
        <div class="image-holder">
          <img :src="'media/' + items.image"/>
        </div>
        <button class="view mb-3" v-show="view" @click="openLink(items.link)">{{view}}</button>
        <p class="instructions" v-show="items.instructions"><span>Instructions:</span>{{items.instructions}}</p>
        <p class="description mt-2">{{items.text}}</p>
        <p class="tools">{{items.tools}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    created() {

    },

    computed: {
      many() {
        return this.length
      }
    },


    methods: {
      close() {
        this.$emit('close')
      },
      prev() {
        this.$emit('prev')
        console.log(this.length)
        console.log(this.many)
      },
      next() {
        this.$emit('next')
      },
      openLink(link) {
        window.open(link, '_blank');
      }
    },
    mounted() {
      console.log(this.length)
    },
    beforeDestroy() {

    },
    components: {

    },
    props: ['items', 'length', 'view', 'id']
  }

</script>

<style scoped>

</style>
