<template>
  <div class="home">
    <!-- home
    <p>Name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" /> -->

    <!-- <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePerson">Update person one</button>

    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update person two</button> -->

    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>    
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup(){
    // "this" is not available in setup() function. undefined
    // console.log(this);

    // const p = ref(null);
    // console.log(p, p.value); // p is a ref object, p.value is null initially

    // let name = "mario";
    // let age = 30; 

    // These are reactive values
    // const name = ref("mario");
    // const age = ref(30);

    // const handleClick = () => {
      // console.log("p: ", p);
      // console.log("p.value: ", p.value);

      // p.value.classList.add("test");
      // p.value.textContent = "Hello World";
    
      // "name" bir ref. içinde taşıdığı değere ulaşmak için ".value" kullanılır ama refleri template içinde kullanırken ".value" gerek yoktur.
      // name.value = "luigi";
      // age.value = 35;
    // }

    // const personOne = ref({
    //  name: "mario",
    //  age: 30,
    //});
    // const personTwo = reactive({
    //  name: "luigi",
    //  age: 35,
    // });

    // const updatePerson = () => {
    //   personOne.value.age = 40;
    // }

    // const updatePersonTwo = () => {
      // personTwo is a reactive object, so we can directly modify without using ".value"
      // personTwo.age = 45;
    // }

    const search = ref("");
    const names = ref(["mario", "luigi", "yoshi", "toad", "bowser", "koopa", "peach"]);

    // `matchingNames` is a computed property that automatically updates 
    // whenever its reactive dependencies (`names` or `search`) change.
    // It is lazily evaluated and cached until those dependencies change again. 
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    })

    // react-hook-form watch ile çok benzer
    // watch(search, () => {
    //   console.log("watch function ran");
    // })

    // react useEffect ile çok benzer. only runs once (initially) after the component is mounted
    // eğer bir değer verirsek örneğin "search.value" gibi, bu değer her değiştiğinde watchEffect tetiklenir.
    // useEffect dependecy array gibi düşünebiliriz.
    // watchEffect(() => {
    //   console.log("watchEffect function ran", search.value);
    // })

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const handleClick = () => {
      console.log("stop watching");
      stopWatch();
    }

    return { names, search, matchingNames, handleClick }
    
    /* return {
      name, age, handleClick,
      personOne, personTwo, updatePerson, updatePersonTwo,
    } */
  },

  /* data() {
    return {
      // This is a reactive value
      name: "mario",
      age: 30
    }
  }, */
}
</script>
