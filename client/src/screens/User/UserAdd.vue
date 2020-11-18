<template>
  <div>
    <h1>Adicionar usuário</h1>
    <UsuarioAddComponent @user="adicionar"></UsuarioAddComponent>
  </div>
</template>

<script>
import axios from 'axios';
import UsuarioAddComponent from './components/UserAddComponent.vue';

export default {
  name: 'UsuarioAdd',
  components: {
    UsuarioAddComponent,
  },
  methods: {
    async adicionar(user) {
      console.log(user);
      const resp = await axios.post('http://localhost:3333/users/add/', user);
      if (resp) {
        this.$router.push({ name: 'usuario' });
      } else {
        console.log(resp);
      }
    },
  },
};
</script>
