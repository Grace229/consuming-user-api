<template>
<div id="app">
  
  <input type="text" id="text" v-model="newname"/>
      <button id="btn" @click="addUser">Add User</button>
<b-card-group deck id="card" >
  <b-card header="Names of Users">
   <b-list-group>
  <b-list-group-item id="user" class="d-flex justify-content-between align-items-center" 
  v-for="User in Users" :key='User.id'>
    {{ User.name }}
   <b-button id="button" variant="danger" @click="clearUser(User)">Delete</b-button>
  </b-list-group-item>


</b-list-group>


   
  </b-card>

 
</b-card-group>
   

</div>
</template>
<script>
import axios from "axios";
export default {
    name: 'Users',
data(){
return{
Users: [],
newname: null
}
},
 
 
  
    
  async created(){
      let getUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.Users = getUsers.data;
     

         console.log(getUsers);
  },
 methods: {
  addUser(){
          if(this.newname !== null){
          this.newname ={ name: this.newname };
            this.Users.unshift(this.newname)
                this.newname = null
            console.log(newname)
            }else{
              alert("Name field can't be empty");
            }
                  
           


 
        
         
      },
clearUser(User){
  this.Users = this.Users.filter(item => item.id !== User.id);
},


 
 } 
  
};
</script>
<style lang="scss" scoped>
#text{
  margin-bottom: 30px;
  padding: 10px; 
  width: 60%;
}
#btn{
  background-color:#dc3545;
  color: white;
   padding: 10px;
   font-weight: bold;
   font-size: 20px;
    margin-bottom: 20px;

}
#user{
  font-weight: bold;
}
#card{
  margin: 0 auto;
  width: 1200px;
}
@media only screen and (max-width: 500px) and (min-width: 320px){
  #card{
    width: 100%;
  }
}
@media only screen and (max-width: 500px) and (min-width: 320px){
  #button{
    width: max-content;
  }
}
</style>