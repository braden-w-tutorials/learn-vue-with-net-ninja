<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue"

// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    console.log("setup")
    // const p = ref(null)

    // These are not reactive values
    // let name = "mario"
    // let age = 30

    //These are reactive values
    const name = ref("mario")
    const age = ref(30)

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add("test")
      // p.value.textContent = "hello, ninjas"

      name.value = "luigi"
      age.value = 35
    }
    return { name, age, handleClick }
  },
}
</script>
