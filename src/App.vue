<template>
  <div id="main">
    <container></container>
  </div>
</template>

<script>
/////////////////////VARIABLES & IMPORTS////////////////////
//////////////////////////////////////////////////////////
import store from './store'
import router from './router'
import container from './containers/Container.vue'

import {polyfill} from "mobile-drag-drop";
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";

polyfill({
    // use this to make use of the scroll behaviour
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});


export default {
  name: 'app',
  store,
  router,
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {


  },
  mounted() {

  },
  components: {
    container
  }
}
</script>

<style scoped>

</style>
