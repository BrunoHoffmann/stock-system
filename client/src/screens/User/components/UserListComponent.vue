<template>
  <div>
    <div class="card p-4">
      <div>
        <h2>Lista de usuários</h2>
        <router-link :to="{ path: 'usuario/adicionar'}" class="btn btn-primary">
          Adicionar
        </router-link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ativo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.active == 'S' ? 'Sim' : 'Não' }}</td>
            <td>
              <router-link
                :to="{ path: 'user/editar', params: { id: user.id}}"
                class="btn btn-primary mr-2"
              >
                Editar
              </router-link>
              <router-link
                :to="{ path: 'user/deletar', params: { id: user.id}}"
                class="btn btn-danger"
              >
                Deletar
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UsuarioListComponent',
  props: ['users'],
};
</script>
