<template>
  <div>
    <UsuarioListComponent :users="users"></UsuarioListComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import UsuarioListComponent from './components/UserListComponent.vue';

export default {
  name: 'Usuario',
  data() {
    return {
      users: [],
    };
  },
  components: {
    UsuarioListComponent,
  },
  methods: {
    async getUsuarios() {
      const resp = await axios.get('http://localhost:3002/api/user');
      this.users = resp.data;
    },
  },
  created() {
    this.getUsuarios();
  },
};
</script>
