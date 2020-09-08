<template>
  <section>
    <h1>Práctica: consumir un API mediante Axios</h1>
    <p>Alumnos de la clase:</p>
    <!-- <pre>alumnos: {{alumnos}}</pre> -->
    <table class="vw-ax-table">
      <thead class="vw-ax-thead">
        <tr>
          <td class="vw-ax-td">Nombre</td>
          <td class="vw-ax-td">Email</td>
          <td class="vw-ax-td">Cuidad</td>
          <td class="vw-ax-td">Sitio web</td>
        </tr>
      </thead>
      <tbody class="vw-ax-tbody">
        <tr v-for="alumno in alumnos" :key="alumno.id">
          <td class="vw-ax-th">{{ alumno.name }}</td>
          <td class="vw-ax-th">{{ alumno.email }}</td>
          <td class="vw-ax-th">{{ alumno.address.city }}</td>
          <td class="vw-ax-th">{{ alumno.website }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Axios',
  data(){
    return{
      alumnos: []
    }
  },
  methods:{
    getStudents: function(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {this.alumnos = response.data})
    }
  },
  created(){
    this.getStudents();
  }
}
</script>

<style>
  .vw-ax-table{
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
  }
  .vw-ax-thead{
    text-transform: uppercase;
    font-weight: bold;
    background-color: #35495e;
    color: white;
  }
  .vw-ax-td{
    padding: 10px 6px;
  }
  .vw-ax-tbody{
    background: #41b883;
    color: white;
  }
  .vw-ax-th{
    padding: 8px;
  }
</style>