<template>
  <div>
    <h1>Editar usuário</h1>
    <UserEditComponent :user="user[0]"/>
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
      const response = await axios.get(`http://localhost:3002/api/user/${this.id}`);

      if (response) {
        this.user = response.data;
      } else {
        this.$route.push({ name: 'usuario' });
      }
    },
  },
  created() {
    this.getUser();
  },
};
</script>
