<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <teleport to=".modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="blue" @close="toggleModal" /> -->
    <Modal theme="blue" @close="toggleModal">
      <!-- v-slot:links ile children'da name'i "links" olan slot içerisine bu template yazılacak -->
      <template v-slot:links>
        <a href="#">link</a>
        <br>
        <a href="#">one more link</a>
      </template>
      <h1>Modal Header</h1>
      <p>Modal Text</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title: "My First Vue App",
      /* header: "This is header prop",
      text: "This is text prop", */
      showModal: false,
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal(){
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
