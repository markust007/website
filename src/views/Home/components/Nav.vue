<template>
  <ul class="nav">
    <li class="image">
      <img src="media/MC.png" />
    </li>
    <li @click="go('#about')">About</li>
    <li @click="go('#dev')">Work</li>
    <li @click="go('#contact')">Contact</li>
  </ul>
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
      go(item) {
        document.querySelector(item).scrollIntoView({
          behavior: 'smooth'
        });
      }
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
