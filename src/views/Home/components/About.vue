<template>
  <section id="about">
    <div class="inner">
      <h4 class="main-title my-5">{{items.title}}</h4>
      <img :src="'media/about/' + items.image" />
      <p class="text mt-3">{{items.text}}</p>
    </div>
  </section>
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

    },


    methods: {

    },
    mounted() {

    },
    beforeDestroy() {

    },
    components: {

    },
    props: ['items']
  }

</script>

<style scoped>

</style>
