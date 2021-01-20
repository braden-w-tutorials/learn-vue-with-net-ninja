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
    <button @click="updateNinjaTwo">Add to Ninja Age by 10</button>
    <p>Computed value is {{ compute }}</p>
    <h2>Using search</h2>
    <input type="text" v-model="search" />
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from "vue"

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

    // Refs are generally better because they are mutable through .value. Reactive cannot change if value is immutable like a string; it must be an object

    //Computed
    const compute = computed(() => {
      return "shaun"
    })

    const search = ref("")
    const names = ref(["mario", "yoshi", "bowser"])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    //Watches variable
    const stopWatch = watch(search, () => {
      console.log("Watched")
    })

    //Watches entire document
    const stopWatchEffect = watchEffect(() => {
      console.log("Effect watched", search.value)
    })
    return {
      name,
      age,
      handleClick,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      compute,
      search,
      names,
      matchingNames,
    }
  },
}
</script>
