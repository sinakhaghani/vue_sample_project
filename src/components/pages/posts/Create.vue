<template>
  <h1>Post Create: </h1>

  <div class="col-md-6">
    <form @submit.prevent="validate">
      <div class="form-group">
        <label >title</label>
        <input v-model.lazy.trim="form.title" type="text" class="form-control" placeholder="title">
        <small  class="form-text text-danger">{{form.titleErrorText}}</small>
      </div>
      <div class="form-group mt-5">
        <label >Body</label>
        <textarea v-model.lazy.trim="form.body" class="form-control">
        </textarea>
        <small class="form-text text-danger">{{form.bodyErrorText}}</small>
      </div>

      <button type="submit" class="btn btn-dark mt-2" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
          <span class="sr-only"></span>
        </div>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  setup(){

    const loading = ref(false);
    const form = reactive({
      title : "",
      titleErrorText : "",
      body : "",
      bodyErrorText : ""
    });

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
        createPost();
      }
    }

    function createPost(){
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
        userId: 1,
      })
          .then(function (response) {
            loading.value = false;
            Swal.fire({
              title: 'Success',
              text: 'created post',
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