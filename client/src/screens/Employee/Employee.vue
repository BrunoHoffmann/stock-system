<template>
  <div class="container">
    <EmployeeListComponent />
  </div>
</template>

<script>
import EmployeeListComponent from './components/EmployeeListComponent.vue';

export default {
  name: 'Employee',
  components: {
    EmployeeListComponent,
  },
};
</script>
