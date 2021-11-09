import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Variable de State declarada en Store',
    nombreDelCurso: 'JQuery a fondo!'
  },
  mutations: {
    cambiarCurso: (nuevoNombre)=> {
      state.nombreDelCurso = nuevoNombre
    }
  },
  actions: {
  },
  modules: {
  }
})
