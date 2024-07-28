<template> <!--vbase-->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
        </p>
        <router-link class="btn btn-dark" :to="{name: 'users'}">Users</router-link>
        <router-link class="btn btn-info ms-3" :to="{name: 'posts'}">Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>