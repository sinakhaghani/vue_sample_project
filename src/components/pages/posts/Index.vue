<template>
  <h1>posts index</h1>

        <div v-if="loading" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-header">
              {{post.title}}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Body: <span class="fw-bold">{{post.body}}</span></li>
          </ul>
        </div>
      </div>

</template>

<script>
import axios from 'axios';
import {ref} from "vue";
//import UserCardView from '../../users/cardView'

export default {
 // name: "index",
/*  components:{
    UserCardView
  },*/

  setup()
  {
    const posts = ref([]);
    const loading = ref(true);

    function getPosts()
    {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
            posts.value = response.data;
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

    getPosts()
    return {posts, loading}
  },
}
</script>

<style scoped>

</style>