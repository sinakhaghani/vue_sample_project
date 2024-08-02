<template>

  <h1>posts show</h1>
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
        <div v-else class="col-md-4">
          <div class="card">
            <div class="card-header">
              {{post.title}}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Body: <span class="fw-bold">{{post.body}}</span></li>
            </ul>

            <div class="card-footer">
              <button class="btn btn-sm btn-danger me-3" @click="postDelete">Delete</button>
              <router-link class="btn btn-primary" :to="{name:'editPost', params: {id : post.id} }">
                Edit
              </router-link>
            </div>

          </div>
        </div>
</template>

<script>
import axios from 'axios';
import {ref} from "vue";
import {useRoute} from 'vue-router';
import Swal from "sweetalert2";

export default {
  // name: "index",

  setup()
  {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function postDelete()
    {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function () {
           // post.value = response.data;
           // loading.value = false;
            Swal.fire({
              title: 'Delete',
              text: 'deleted post',
              icon: 'warning',
              confirmButtonText: 'ok'
            })
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

    function getUser()
    {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
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
    return {post, loading, postDelete}
  },
}
</script>

<style scoped>

</style>