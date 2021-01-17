<template>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click me</button>
    <div v-if="showModal">
        <Modal
            :header="header"
            :text="text"
            theme="sale"
            @Close="toggleModal"
        />
    </div>
    <button @click="toggleModal">Open modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
    name: "App",
    components: { Modal },
    data() {
        return {
            title: "My First Vue App :)",
            header: "Hello World",
            text: "Some text  goes here",
            showModal: false
        };
    },
    methods: {
        handleClick() {
            console.log(this.$refs.name);
            this.$refs.name.classList.add("active");
            this.$refs.name.focus();
        },
        toggleModal() {
            this.showModal = !this.showModal;
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
}
</style>
