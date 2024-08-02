<template>
  <h1>Post Edit: </h1>

  <div class="col-md-6">
    <form @submit.prevent="validate">
      <div class="form-group">
        <label >title</label>
        <input v-model.lazy.trim="form.title" type="text" class="form-control" placeholder="title">
        <small  class="form-text text-danger">{{form.titleErrorText}}</small>
      </div>
      <div class="form-group mt-5">
        <label >Body</label>
        <textarea v-model.lazy.trim="form.body" class="form-control" rows="6">
        </textarea>
        <small class="form-text text-danger">{{form.bodyErrorText}}</small>
      </div>

      <button type="submit" class="btn btn-dark mt-2" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
          <span class="sr-only"></span>
        </div>
        Update
      </button>
    </form>
  </div>
</template>

<script>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";

export default {
  setup(){

    const route = useRoute();
    const loading = ref(false);
    //const post = ref({});
    const form = reactive({
      title : "",
      titleErrorText : "",
      body : "",
      bodyErrorText : ""
    });

    function getUser()
    {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            form.title = response.data.title;
            form.body = response.data.body;
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

    function validate(){
      if (form.title === "")
      {
        form.titleErrorText = "title is required";
      }
      else{
        form.titleErrorText = "";
      }

      if (form.body === "")
      {
        form.bodyErrorText = "body is required";
      }
      else{
        form.bodyErrorText = "";
      }
      /*console.log(form.titleErrorText)
      console.log(form.bodyErrorText)*/

      if (form.body !== "" && form.title !== "")
      {
        loading.value = true;
        updatePost();
      }
    }

    function updatePost(){
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        id: route.params.id,
        title: form.title,
        body: form.body,
        userId: 1,
      })
          .then(function (response) {
            loading.value = false;
            Swal.fire({
              title: 'Success',
              text: 'updated post',
              icon: 'success',
              confirmButtonText: 'ok'
            })
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    return {form, validate, loading}
  }
}
</script>

<style scoped>

</style>