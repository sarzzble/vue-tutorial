<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ blue: theme === 'blue' }">
        <!-- <h1>{{ header }}</h1>
        <p>{{ text }}</p>
        <button @click="toggleModal">close modal</button> -->

        <!-- slot react'teki children mantığı -->
        <!-- eğer parent'tan children olarak content verilmezse default olarak "default content" yazacak -->
        <slot>default content</slot>
        <div class="actions">
          <slot name="links"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme", "toggleModal"],
  methods: {
    closeModal(){
      // $emit allows a child component to send an event to the parent component
      this.$emit("close");
    }
  }
}
</script>

<!-- you can use "scoped" for styles apply only in this block -->
<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1{
      color: #03cfb4;
      border: none;
      padding: 0;
    }
    .modal p {
      font-style: normal;
    }
    .modal.blue {
      background: blue;
      color: white;
    }
    .modal.blue h1 {
      color: white;
    }
    .modal .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px 0 10px 0;
    }
    .modal .actions a {
      padding: 8px;
      border: 1px solid #eee;
      border-radius: 4px;
      text-decoration: none;
      margin: 10px;
    }
    .modal.blue .actions a {
      color: white;
    }
</style>