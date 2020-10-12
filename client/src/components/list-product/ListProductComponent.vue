<template>
  <div class="justify-content-center">
    <h1>Lista dos produtos</h1>
    <router-link class="btn btn-success" to="/create-product"
      >Adicionar</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Codigo de Barras</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Valor</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in product" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.bar_code }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.value }}</td>
          <td>
            <router-link
              class="btn btn-primary mr-2"
              to="{ name: 'edit-product', query: { id: 123 }}"
              >Editar</router-link
            >
            <router-link class="btn btn-danger" to="/product-delete/:item.id"
              >Deletar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios/dist/axios';

export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    axios({
      url: 'http://localhost:4000',
      method: 'post',
      data: {
        query: `
          {
            product {
              id
              name
              bar_code
              amount
              value
            }
          }
        `,
      },
    }).then((response) => {
      const query = response.data;
      this.product = query.data.product;
    });
  },
};
</script>
