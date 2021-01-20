<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
</template>

<script>
import { ref } from "vue"

// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    console.log("setup")
    const p = ref(null)
    // These are not reactive values
    let name = "mario"
    let age = 30
    const handleClick = () => {
      console.log(p, p.value)
    }
    return { name, age, handleClick }
  },
}
</script>
