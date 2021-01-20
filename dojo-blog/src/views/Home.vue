<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add to Age</button>
    <input type="text" v-model="name" />
    <h2>Using refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Add to Ninja Age by 10</button>
    <h2>Using reactive</h2>
    <p>{{ ninjaTwo.name }}</p>
    <p>Computed value is {{ computed }}</p>
  </div>
</template>

<script>
import { ref, reactive, compute } from "vue"

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

    // We can pass any value into ref
    const ninjaOne = ref({ name: "mario", age: 30 })
    const ninjaTwo = reactive({ name: "luigi", age: 35 })
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40
    }
    it
    // Refs are generally better because they are mutable through .value. Reactive cannot change if value is immutable like a string; it must be an object

    const computed = computed(() => {
      return "shaun"
    })
    return {
      name,
      age,
      handleClick,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      computed,
    }
  },
}
</script>
