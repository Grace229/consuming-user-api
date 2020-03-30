<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <button add(numbers)> Add 5</button>
    <button>Subtract 5</button>
  </div>
</template>
 
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed:{
    allNumbers(){
      return this.$store.state.numbers;
    }
  }, 
  methods: {
add: function(numbers){
  store.commit('addFive',{id:'2',scores:'5'})
}
  },

}
</script>
