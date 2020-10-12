<template>
  <div>
    <!-- INICIO NAVBAR -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a href="" class="navbar-brand order-md-last">dwa</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/">Produtos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- FIM NAVBAR -->
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>
