<template>
  <div class="card p-4">
    <form>
      <div class="form-group">
        <label for="name">*Nome:</label>
        <input type="text" class="form-control" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">*Email:</label>
        <input type="email" class="form-control" id="email" v-model="email">
      </div>

      <div class="form-group">
        <label for="password">*Nova senha:</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>

      <div class="form-group">
        <label for="active">*Ativo:</label>
        <select name="active" class="form-control" id="active" v-model="active">
          <option value="S">Sim</option>
          <option value="N">Não</option>
        </select>
      </div>
      <button class="btn btn-primary mr-3" @click.prevent="editarUsuario">Editar</button>
      <router-link to="/usuario" class="btn btn-success">Voltar</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserEditComponent',
  props: ['user'],
  data() {
    return {
      name: '',
      email: '',
      password: '',
      active: '',
    };
  },
  watch: {
    user(newVal) {
      this.name = newVal.name;
      this.email = newVal.email;
      this.password = newVal.password;
      this.active = newVal.naactiveme;
    },
  },
};
</script>
