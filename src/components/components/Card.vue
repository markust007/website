<template>
  <div class="card-outer" @mouseover="mouseOver" @mouseout="mouseOut" @click="openCard" @touchstart="openCard">
    <div class="card">
      <div class="image-holder">
        <img :src="'media/' + items.image"/>
        <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInUp"
        leave-active-class="animated fadeOut">
          <div class="description-holder" v-show="!show">
            <h4 class="title">{{items.title}}</h4>
            <p class="description">{{newText}}</p>
          </div>
        </transition>
      </div>
      <div class="title-holder">
        <p class="title">{{items.bottomTitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },

    created() {

    },

    computed: {
      newText() {
        let $string = this.items.text.substr(0, 75);
        return $string + "..."
      }
    },


    methods: {
      mouseOver() {
        this.show = false
      },
      mouseOut() {
        this.show = true
      },
      openCard() {
        this.$emit('openCard')
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
