<template>
  <div>
    <UsuarioListComponent
      :users="users"
      :notify="notify"
      @deleteUser="deleteUser"
    >
    </UsuarioListComponent>
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
      notify: {},
    };
  },
  components: {
    UsuarioListComponent,
  },
  methods: {
    async getUsuarios() {
      const resp = await axios.get('http://localhost:3333/users');
      this.users = resp.data;
    },
    async deleteUser(id) {
      const resp = await axios.get(`http://localhost:3333/users/delete/${id}`);

      if (resp) {
        this.notify = {
          mensagem: 'Deletado com sucesso!',
          type: 'alert-success',
        };
      }
      this.getUsuarios();
    },
  },
  created() {
    this.getUsuarios();
  },
};
</script>
