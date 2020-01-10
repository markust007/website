<template>
  <div id="container" v-if="items">
    <navi :items="items"></navi>
    <about :items="items.about[0]"></about>
    <div class="dev-top"><h4 class="main-title">{{items.dev[0].topTitle}}</h4></div>
    <div class="c_lib"><button @click="openComponentLibrary()">View Component Library<i class="fa fa-angle-double-right" aria-hidden="true"></i></button></div>
    <dev :items="items"></dev>
    <design :items="items"></design>
    <misc :items="items"></misc>
    <contact :items="items.contact[0]"></contact>
  </div>
</template>

<script>
import axios from 'axios';

import navi from './components/Nav.vue';
import about from './components/About.vue';
import dev from './components/Dev.vue';
import design from './components/Design.vue';
import misc from './components/Misc.vue';
import contact from './components/Contact.vue';

var json = 'data/data.json';

export default {
  data () {
    return {
      items: null,
      open: false
    }
  },
  created() {
    this.fetchData();
  },
  computed: {

  },
  methods: {
    fetchData() {
      axios.get(json)
      .then(response => {
        // JSON responses are automatically parsed.
        this.items = response.data
        // console.log(this.items)
      })
      .catch(error => {
        console.log(error);
      })
    },
    openCard() {
      this.open = true
    },
    close() {
      this.open = false
    },
    openComponentLibrary() {
      window.location.href = window.location.href + '/components'
    }
  },
  mounted() {

  },
  components: {
    navi,
    about,
    dev,
    design,
    misc,
    contact
  }
}
</script>

<style scoped>

</style>
