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
    changeTitle() {
      //  Use this
      this.title = "Words of Radiance"
    },
  },
})

// Grants Vue complete access to everything in #app element (nothing outside)
app.mount("#app")
