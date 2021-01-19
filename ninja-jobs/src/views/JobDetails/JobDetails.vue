<template>
  <div v-if="job">
    <!-- <h1>Job Details Landing Page</h1> -->
    <h1>{{ job.title }}</h1>
    <!-- Passes id from url as a param of $route -->
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else><p>Loading job details...</p></div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message))
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     }
  //   },
}
</script>

<style></style>
