<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-success color-vue mb-3">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/usuario" class="nav-link text-white">Usuário</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/produto" class="nav-link text-white">Produto</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/venda" class="nav-link text-white">Venda</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
.color-vue {
  background: #42B983 !important;
}

.text-vue {
  color: #42B983 !important;
}
</style>