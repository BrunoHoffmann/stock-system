<template>
  <div>
    <UsuarioAddComponent @users="adicionar"></UsuarioAddComponent>
  </div>
</template>

<script>
import axios from 'axios';
import UsuarioAddComponent from './components/UserAddComponent.vue';

export default {
  name: 'UsuarioAdd',
  data() {
    return {
      users: {},
    };
  },
  components: {
    UsuarioAddComponent,
  },
  methods: {
    adicionar(users) {
      this.users = users;
      this.adicionarUsuario();
    },
    async adicionarUsuario() {
      const resp = await axios.post('http://localhost:3002/api/user/add', this.users);
      console.log(resp.data);
    },
  },
};
</script>
