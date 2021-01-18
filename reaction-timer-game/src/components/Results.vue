<template>
    <p>Reaction Time: {{ score }} ms</p>
</template>

<script>
export default {
    props: ["score"],
    data() {
        return {
            ranke: null
        };
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "Ninja Fingers";
        } else if (this.score < 400) {
            this.rank = "Rapid Reflexes";
        } else {
            this.rank = "Snail pace...";
        }
    }
};
</script>
