<template>
<div id="app">
    <h1>this is the user page</h1>
    <input type="text" v-model="name"/>
      <button >Add User</button> 
<ul>
    <li v-for="User in Users" :key='User.id'>  {{ User.name }}</li> 
</ul>
</div>
</template>
<script>
import axios from "axios";
export default {
    name: 'Users',
data(){
return{
Users: [],
name: null
};
},
 
 
   methods: {
        addUser(){
            if(this.name == ""){
                  let user = this.name
                this.Users.push(user)
                this.name = ""
                
            }
            else{
              alert("please add a user")
            }
      }

  },
    
  async created(){
      let fetchUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.Users = fetchUsers.data;
     

         console.log(fetchUsers);
  },
 
  
  
};
</script>