import Vue from 'vue'


Vue.filter('mayuscula', function(value) {
    return value.toUpperCase()
})

Vue.filter('cambioVocales', function(value) {
    let textoMinuscula = value.toLowerCase()
    var textoReemplazado = textoMinuscula.replace(/a/g, "U");
    textoReemplazado = textoReemplazado.replace(/e/g, "O");
    textoReemplazado = textoReemplazado.replace(/o/g, "E");
    textoReemplazado = textoReemplazado.replace(/u/g, "A");

    return textoReemplazado
})
