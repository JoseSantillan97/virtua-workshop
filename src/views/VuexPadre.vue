<template>
  <section>
    <h1>Soy el componente padre</h1>
    <p>número global desde el padre: {{ $store.state.numero }}</p>
    <button @click="$store.state.numero++">aumentar número</button>
    <VuexHijo/>
  </section>
</template>

<script>
import VuexHijo from '@/views/VuexHijo'
export default {
  name: 'VuexPadre',
  components:{
    VuexHijo
  },
  data(){
    return{

    }
  }
}
</script>