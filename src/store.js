var QueryString = function() {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    location: 1,
    userLocation: "",
    userName: "",
    progressLocation: 1,
    pageHeader: "",
    menu: true,
    nav: {
      navLeft: false,
      navRight: true
    },
    navCards: {
      nav1: {
        disabled: false,
        done: false
      },
      nav2: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav3: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav4: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav5: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav6: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav7: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav8: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      },
      nav9: {
        disabled: true,
        done: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      }
    }
  },
  actions: {

  },
  mutations: {
    changeUserLocation (state, value) {
      state.userLocation = value;
    },
    changeUserName (state, value) {
      state.userName = value;
    },
    incrementProgress (state) {
      if (state.progressLocation > state.location) {

      } else {
        state.progressLocation += 1;
      }
    },
    changeProgress (state, value) {
      state.progressLocation = value;
    },
    pageHead (state, value) {
      state.pageHeader = value;
    },
    increment (state, value) {
      state.location = value;
    },
    locationPlus (state) {
      state.location += 1;
    },
    locationMinus (state) {
      state.location -= 1;
    },
    menuToggle (state) {
      state.menu = !state.menu;
    },
    navLeftToggle (state) {
      state.nav.navLeft = !state.nav.navLeft;
    },
    navRightToggle (state) {
      state.nav.navRight = !state.nav.navRight;
    },
    navLeftOn (state) {
      state.nav.navLeft = false
    },
    navRightOn (state) {
      state.nav.navRight = false
    },
    navLeftOff (state) {
      state.nav.navLeft = true
    },
    navRightOff (state) {
      state.nav.navRight = true
    },
    nav1Active (state) {
      state.navCards.nav1.disabled = false
    },
    nav1Done (state) {
      state.navCards.nav1.done = true
    },
    nav2Active (state) {
      state.navCards.nav2.disabled = false
    },
    nav2Done (state) {
      state.navCards.nav2.done = true
    },
    nav2aDone (state) {
      state.navCards.nav2.a = true
    },
    nav2bDone (state) {
      state.navCards.nav2.b = true
    },
    nav2cDone (state) {
      state.navCards.nav2.c = true
    },
    nav2dDone (state) {
      state.navCards.nav2.d = true
    },
    nav2eDone (state) {
      state.navCards.nav2.e = true
    },
    nav3Active (state) {
      state.navCards.nav3.disabled = false
    },
    nav3Done (state) {
      state.navCards.nav3.done = true
    },
    nav3aDone (state) {
      state.navCards.nav3.a = true
    },
    nav3bDone (state) {
      state.navCards.nav3.b = true
    },
    nav3cDone (state) {
      state.navCards.nav3.c = true
    },
    nav3dDone (state) {
      state.navCards.nav3.d = true
    },
    nav3eDone (state) {
      state.navCards.nav3.e = true
    },
    nav4Active (state) {
      state.navCards.nav4.disabled = false
    },
    nav4Done (state) {
      state.navCards.nav4.done = true
    },
    nav4aDone (state) {
      state.navCards.nav4.a = true
    },
    nav4bDone (state) {
      state.navCards.nav4.b = true
    },
    nav4cDone (state) {
      state.navCards.nav4.c = true
    },
    nav4dDone (state) {
      state.navCards.nav4.d = true
    },
    nav4eDone (state) {
      state.navCards.nav4.e = true
    },
    nav5Active (state) {
      state.navCards.nav5.disabled = false
    },
    nav5Done (state) {
      state.navCards.nav5.done = true
    },
    nav5aDone (state) {
      state.navCards.nav5.a = true
    },
    nav5bDone (state) {
      state.navCards.nav5.b = true
    },
    nav5cDone (state) {
      state.navCards.nav5.c = true
    },
    nav5dDone (state) {
      state.navCards.nav5.d = true
    },
    nav5eDone (state) {
      state.navCards.nav5.e = true
    },
    nav6Active (state) {
      state.navCards.nav6.disabled = false
    },
    nav6Done (state) {
      state.navCards.nav6.done = true
    },
    nav6aDone (state) {
      state.navCards.nav6.a = true
    },
    nav6bDone (state) {
      state.navCards.nav6.b = true
    },
    nav6cDone (state) {
      state.navCards.nav6.c = true
    },
    nav6dDone (state) {
      state.navCards.nav6.d = true
    },
    nav6eDone (state) {
      state.navCards.nav6.e = true
    },
    nav7Active (state) {
      state.navCards.nav7.disabled = false
    },
    nav7Done (state) {
      state.navCards.nav7.done = true
    },
    nav7aDone (state) {
      state.navCards.nav7.a = true
    },
    nav7bDone (state) {
      state.navCards.nav7.b = true
    },
    nav7cDone (state) {
      state.navCards.nav7.c = true
    },
    nav7dDone (state) {
      state.navCards.nav7.d = true
    },
    nav7eDone (state) {
      state.navCards.nav7.e = true
    },
    nav8Active (state) {
      state.navCards.nav8.disabled = false
    },
    nav8Done (state) {
      state.navCards.nav8.done = true
    },
    nav8aDone (state) {
      state.navCards.nav8.a = true
    },
    nav8bDone (state) {
      state.navCards.nav8.b = true
    },
    nav8cDone (state) {
      state.navCards.nav8.c = true
    },
    nav8dDone (state) {
      state.navCards.nav8.d = true
    },
    nav8eDone (state) {
      state.navCards.nav8.e = true
    },
    nav9Active (state) {
      state.navCards.nav9.disabled = false
    },
    nav9Done (state) {
      state.navCards.nav9.done = true
    },
    nav9aDone (state) {
      state.navCards.nav9.a = true
    },
    nav9bDone (state) {
      state.navCards.nav9.b = true
    },
    nav9cDone (state) {
      state.navCards.nav9.c = true
    },
    nav9dDone (state) {
      state.navCards.nav9.d = true
    },
    nav9eDone (state) {
      state.navCards.nav9.e = true
    },
  },
  getters: {

  }
})
export default store

if (QueryString.debug === "true") {
  document.addEventListener("keydown", (e) => {
    const actions = {
      ArrowRight: () => { store.commit('incrementProgress'), store.commit('locationPlus') },
      ArrowLeft: () => store.commit('locationMinus'),
    };
    maybe(actions[e.key]);
  })

  function maybe(fn) {
    fn ? fn() : null;
  }
}
