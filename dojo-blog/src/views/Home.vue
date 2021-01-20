<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  setup() {console.log('setup')
  // These are not reactive values
  let name = 'mario
  let age = 30
  return{name:name, age: age'},
}
</script>
