<template>
  <section id="misc">
    <h5 class="section-top">{{items.misc[0].section}}</h5>
    <card
      v-for="item in items.misc"
      :key="item.id"
      :items="item"
      @openCard="openCard(item.id)"
      >
      </card>
    <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
      <card-big
        :items="items.misc[id]"
        :view="items.design[0].view"
        :id="id"
        :length="items.misc.length"
        v-show="card"
        @close="close"
        @prev="prev"
        @next="next"
        >
      </card-big>
    </transition>
  </section>
</template>

<script>
const $body = document.getElementsByTagName("body")[0]
import card from './components/Card.vue';
import cardBig from './components/CardBig.vue';
  export default {
    data() {
      return {
        id: 0,
        card: false
      }
    },

    created() {

    },

    computed: {

    },


    methods: {
      openCard(number) {
        let $number = parseInt(number)
        this.id = $number - 1
        this.card = true
        $body.classList.add('fixed');

      },
      close() {
        this.card = false
        $body.classList.remove('fixed');
      },
      prev() {
        this.id -= 1
      },
      next() {
        this.id += 1
      }
    },
    mounted() {
      console.log(this.items.misc.length)
    },
    beforeDestroy() {

    },
    components: {
      card,
      cardBig
    },
    props: ['items']
  }

</script>

<style scoped>

</style>
