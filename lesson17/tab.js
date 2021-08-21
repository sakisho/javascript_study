"use strict";

const createApp = () => {
  new Vue({
    el: "#app",
    data: {
      currentTabIndex: 0,
      tabs: [
        {
          id: 1,
          name: "タブ１",
          content: "タブ１の情報タブ１の情報"
        },
        {
          id: 2,
          name: "タブ２",
          content: "タブ２の情報タブ２の情報"
        },
        {
          id: 3,
          name: "タブ３",
          content: "タブ３の情報タブ３の情報"
        },
        {
          id: 4,
          name: "タブ４",
          content: "タブ４の情報タブ４の情報"
        }
      ]
    },
    computed: {
      currentTabCotent() {
        return this.tabs[this.currentTabIndex].content;
      }
    },
    methods: {
      onClick(index) {
        this.currentTabIndex = index;
      }
    }
  });
};

const init = () => {
  createApp();
};

document.addEventListener("DOMContentLoaded", init.bind(this));