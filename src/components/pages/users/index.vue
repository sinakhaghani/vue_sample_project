<template>
  <h1>users index</h1>

        <div v-if="loading" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardView :user="user"></UserCardView>
      </div>

</template>

<script>
import axios from 'axios';
import {ref} from "vue";
import UserCardView from '../../users/cardView'

export default {
 // name: "index",
  components:{
    UserCardView
  },

  setup()
  {
    const users = ref([]);
    const loading = ref(true);

    function getUsers()
    {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            users.value = response.data;
            loading.value = false;
           // console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    getUsers()
    return {users, loading}
  },
}
</script>

<style scoped>

</style>