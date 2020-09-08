<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Yo soy <strong>"About"</strong> el padre del hijo</h2>
    <button v-on:click="addCounter">Agregar</button> <button @click="downCounter">Quitar</button> {{counter}}
    <Hijo :contador="this.counter" @nombreHijo="nombreDesdeHijo = $event" />
    <p>nombre Desde Hijo: {{nombreDesdeHijo}}</p>
  </div>
</template>

<script>
import Hijo from '@/views/Hijo.vue'
export default {
  name: 'About',
  components:{
    Hijo
  },
  data(){
    return{
      counter: 0,
      nombreDesdeHijo: ''
    }
  },
  methods:{
    addCounter: function(){
      this.counter ++;
    },
    downCounter: function(){
      this.counter --;
    }
  }
}
</script>

<style>
  .about{
    border: 2px solid rebeccapurple;
  }
</style>