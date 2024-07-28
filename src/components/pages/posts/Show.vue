<template>

  <h1>users show</h1>
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else class="col-md-4" >
        <UserCardView :user="user"></UserCardView>
      </div>
</template>

<script>
import axios from 'axios';
import {ref} from "vue";
import UserCardView from '../../users/cardView'
import {useRoute} from 'vue-router';

export default {
  // name: "index",
  components:{
    UserCardView
  },

  setup()
  {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser()
    {
      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(function (response) {
            user.value = response.data;
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

    getUser()
    return {user, loading}
  },
}
</script>

<style scoped>

</style>