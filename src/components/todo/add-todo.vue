<template>
  <p>
    <input type="text" v-model="newTodo">
    <button v-on:click="addTodo" v-bind:disabled="disableAddTodo">add</button>
  </p>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    data: function () {
      return {
        newTodo: ''
      }
    },
    computed: {
      disableAddTodo: function () {
        return this.newTodo.length == 0;
      }
    },
    vuex: {
      getters: {},
      actions: {
        addTodo: function ({ dispatch }) {
          dispatch('ADD_TODO', {
            todo: {
              text: this.newTodo,
              toggled: false,
            }
          });
          this.newTodo = '';
        },
      }
    }
  });
</script>

<style lang="less">
  input[type="text"] {
    border: none;
    background: none;
    outline: none;
    font-size: inherit;
    
    border-bottom: 1px solid black;
  }

  button {
    background: black;
    color: white;
    border: none;
    padding: 3px 15px;
    transition: background 150ms;
    font-size: inherit;

    &[disabled] {
      background: rgb(200,200,200);
    }
  }
</style>