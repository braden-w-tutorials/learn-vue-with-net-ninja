<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["theme"],
    methods: {
        closeModal() {
            this.$emit("Close");
        }
    }
};
</script>

<style scoped>
/* Use scoped to apply to only this component */
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
h1 {
    color: green;
    border: none;
}

.modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
/* .modal.sale {
    background: crimson;
    color: white;
}
.modal.sale h1 {
    color: white;
} */
</style>
