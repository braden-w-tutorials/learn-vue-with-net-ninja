const app = Vue.createApp(){
    template: "<h2>I am template</h2>"
}

// Grants Vue complete access to everything in #app element (nothing outside)
app.mount("#app")
