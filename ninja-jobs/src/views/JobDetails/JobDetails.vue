<template>
  <h1>Job Details Landing Page</h1>
  <!-- Passes id from url as a param of $route -->
  <p>The job id is {{ $route.params.id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>

<style></style>
