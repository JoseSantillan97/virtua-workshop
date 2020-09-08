<template>
  <section class="vw-hw-section">
    <div class="vw-hw-input">
      <h1 class="vw-hw-header">{{greeting}}</h1>
      <div class="vw-hw-contentInputs">
        <h2>Directivas</h2>
        <input v-model="nombre" type="text" placeholder="Escriba su nombre" >: {{nombre}}
        <p v-if="nombre == 'José'">tu nombre es: {{nombre}}</p>
        <p v-else>Tu nombre no es José</p>
      </div>
      <hr>
      <h2>Directiva v-bind</h2>
      <table class="vw-hw-table">
        <thead class="vw-hw-thead">
          <tr>
            <td class="vw-hw-td">id</td>
            <td class="vw-hw-td">Nombre</td>
            <td class="vw-hw-td">red social favorita</td>
          </tr>
        </thead>
        <tbody class="vw-hw-tbody">
          <tr v-for="user in users" :key="user.id">
            <th class="vw-hw-th">{{user.id}}</th>
            <th>{{user.nombre}}</th>
            <th><a target="_blank" v-bind:href="user.red">{{user.red}}</a></th>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      nombre: 'José',
      greeting: 'Hello from vueJS data',
      users: [
        {id: 1, nombre: 'Juan', red: 'http://www.facebook.com'},
        {id: 2, nombre: 'Pedro', red: 'http://www.google.com'},
        {id: 3, nombre: 'Matias', red: 'http://www.youtube.com'}
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vw-hw-section{
    display: flex;
    width: 100%;
  }
  .vw-hw-input{
    width: 100%;
    margin: 1rem .5rem;
  }
  .vw-hw-header{
    display: flex;
    justify-content: center;
  }
  .vw-hw-table{
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
  }
  .vw-hw-thead{
    text-transform: uppercase;
    font-weight: bold;
    background-color: #35495e;
    color: white;
  }
  .vw-hw-td{
    padding: 10px 6px;
  }
  .vw-hw-tbody{
    background: #41b883;
    color: white;
  }
  .vw-hw-th{
    padding: 8px;
  }
</style>
