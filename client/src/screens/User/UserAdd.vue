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
  components: {
    UsuarioAddComponent,
  },
  methods: {
    async adicionar(users) {
      const resp = await axios.post('http://localhost:3002/api/user/add', users);

      if (resp) {
        this.$router.push({ name: 'usuario' });
      } else {
        console.log(resp);
      }
    },
  },
};
</script>
