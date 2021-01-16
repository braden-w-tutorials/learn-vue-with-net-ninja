const app = Vue.createApp({
  // Data, functions
  //template: "<h2>I am template</h2>",
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    }
  },
  methods: {
    changeTitle(title) {
      //  Use this
      //   this.title = "Words of Radiance"
      this.title = title
    },
  },
})

// Grants Vue complete access to everything in #app element (nothing outside)
app.mount("#app")
