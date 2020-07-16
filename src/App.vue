<template>
  <div id="app">
    <h1>Vuex</h1>
    <h3> Create Event {{ user.name }}</h3>
    <p>There are {{ catLength }} categories</p>
     <ul>
       <li v-for="cat in categories" :key="cat">
         {{ cat }}
       </li>
     </ul>
     
     <input type="text" v-model="categorie">
     <button v-on:click="Cate">Add Categorie</button>
     <p>{{ getEventById(2) }}</p>
     <span>counter: {{ counter }}</span><br/>
     <button v-on:click="Add">add</button>
     <button v-on:click="Minus">minus</button>
     <button v-on:click="Zero">zero</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'



export default {
  name: 'App',

  data(){
      return{
        categorie: ''
      }
  },

 computed:{
   ...mapState(['user', 'categories', 'counter']),
   ...mapGetters(['getEventById', 'catLength'])
 },

 methods:{
  Add(){
    this.$store.dispatch('increment')
  },
  Minus(){
    this.$store.dispatch('decrement')
  },
  Zero(){
    this.$store.dispatch('zero')
  },
  Cate(){
    this.$store.dispatch('createCate', this.categorie)
  }
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
