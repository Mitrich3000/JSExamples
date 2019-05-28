<template>
    <div>
        <h1>Users</h1>
        <p>Current route: {{ url }}</p>
        <ul>
            <li v­for="i in [1, 2, 3, 4, 5]" :key="i">
                <router-link :to="{ name: 'user', params: { userId: i } }">User {{ i }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    name: 'Users',
    data: () => ({
      url: null,
    }),
    beforeRouteEnter(to, from, next) {
      next(component => (component.url = to.path));
    },
    beforeRouteUpdate(to, from, next) {
      this.url = to.path;
      next();
    },
  };
</script>
