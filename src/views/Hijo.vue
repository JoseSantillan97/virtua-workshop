<template>
  <section class="son">
    <h2>Yo soy el hijo del padre</h2>
    
    <p>Al intentar aumentar el contador en el componente hijo es posible, pero da error en consola. "No se puede o debe mutar las props"</p>
    <button @click="addCounter">Agregar contador</button> {{this.contador}}

    <p>Mi nombre es: {{nombre}}</p>
  </section>
</template>

<script>
export default {
  data(){
    return{
      nombre: 'José',
    }
  },
  props: {
    contador: Number
  },
  methods:{
    addCounter(){
      this.contador ++;
    }
  },
  mounted(){
    this.$emit('nombreHijo', this.nombre);
  }
}
</script>

<style>
  .son{
    border: 2px solid red;
    margin: 4rem;
  }
</style>