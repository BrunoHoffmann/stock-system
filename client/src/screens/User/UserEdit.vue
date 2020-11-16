<template>
  <div>
    <h1>Editar usuário</h1>
    <UserEditComponent :user="user[0]" @user="editUser"/>
  </div>
</template>

<script>
import axios from 'axios';
import UserEditComponent from './components/UserEditComponent.vue';

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {},
      id: '',
    };
  },
  components: {
    UserEditComponent,
  },
  methods: {
    async getUser() {
      this.id = this.$route.params.id;
      const response = await axios.get(`http://localhost:3333/users/edit/${this.id}`);

      if (response) {
        this.user = response.data;
      } else {
        this.$route.push({ name: 'usuario' });
      }
    },
    async editUser(user) {
      const resp = await axios.post(`http://localhost:3333/users/edit/${user.id}`, user);

      if (resp.success) {
        this.$router.push({ name: 'usuario' });
      } else {
        console.log(resp);
      }
    },
  },
  created() {
    this.getUser();
  },
};
</script>
