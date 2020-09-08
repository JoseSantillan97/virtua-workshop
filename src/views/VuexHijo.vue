<template>
  <section>
    <h3>Soy VuexHijo de VuexPadre</h3>
    <p>este es el número global desde el hijo: {{ $store.state.numero }}</p>
    <button @click="$store.state.numero++">También aumentar</button>
  </section>
</template>