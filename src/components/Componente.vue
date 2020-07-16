<template>
  <section class="src-components-componente">
    <input type="text" v-model="texto"><br>
    <h1>{{texto | cambioVocales | mayuscula}}</h1>

    <p>respuestas: 1-b,2-b,3-c,4-a y b,5-b y c</p>
  </section>
</template>

<script>
export default {
  name: 'Componente',
  props: {

  },
  data () {
      return {
        texto:''
      }
    },
}
</script>

<style scoped lang="css">
  .src-components-componente {

  }
</style>
