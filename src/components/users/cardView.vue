<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="{name:'userId', params: {id : user.id} }">
        {{user.name}}
      </router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: <span class="fw-bold">{{user.username}}</span></li>
      <li class="list-group-item">Email: <span class="fw-bold">{{user.email}}</span></li>
      <li class="list-group-item">Phone: <span class="fw-bold">{{user.phone}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cardView",
  props: {
    user:Object
  }
}
</script>

<style scoped>

</style>