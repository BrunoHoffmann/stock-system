<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1>Criar Produto</h1>
        <div class="card-body">
          <form @submit.prevent="handleSubmitForm()">
            <!-- INICIO BLOCO NAME-->
            <div class="form-group">
              <label for="name" class="font-weight-bold">Nome: </label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Nome"
                v-model="product.name"
              >
            </div>
            <!-- FIM BLOCO NAME-->

            <!-- INICIO BLOCO BAR CODE-->
            <div class="form-group">
              <label for="bar_code" class="font-weight-bold">Codigo de barras: </label>
              <input
              type="text"
              name="bar_code"
              class="form-control"
              placeholder="Codigo de barras"
              v-model="product.bar_code"
              >
            </div>
            <!-- FIM BLOCO BAR CODE-->

            <!-- INICIO BLOCO AMOUNT-->
            <div class="form-group">
              <label for="amount" class="font-weight-bold">Quantidade: </label>
              <input
                type="text"
                name="amount"
                class="form-control"
                placeholder="Quantidade"
                v-model="product.amount"
              >
            </div>
            <!-- FIM BLOCO AMOUNT-->

             <!-- INICIO BLOCO VALUE-->
            <div class="form-group">
              <label for="value" class="font-weight-bold">Valor: </label>
              <input
                type="text"
                name="value"
                class="form-control"
                placeholder="Valor"
                v-model="product.value"
                >
            </div>
            <!-- FIM BLOCO VALUE-->

            <div class="form-group">
              <button type="submit" class="btn btn-success">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        bar_code: '',
        amount: '',
        value: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {

    },
  },
};
</script>

<style scoped>
</style>
