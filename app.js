const app = Vue.createApp({
    // Data, functions
    //template: "<h2>I am template</h2>",
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45,
        };
    },
    methods: {
        changeTitle(title) {
            //  Use this
            //   this.title = "Words of Radiance"
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },

        handleEvent(eventObject, data) {
            console.log(eventObject);
            if (data) {
                console.log(data);
            }
        },
    },
});

// Grants Vue complete access to everything in #app element (nothing outside)
app.mount("#app");
