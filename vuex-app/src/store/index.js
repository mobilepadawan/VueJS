import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Variable de State declarada en Store',
    nombreDelCurso: 'JQuery a fondo!'
  },
  mutations: {
    cambiarCurso: (state, nuevoNombre)=> {
      state.nombreDelCurso = nuevoNombre
    }
  },
  incrementar: (state)=> {
    state.valor++
  },
  actions: {
    cambiarNombreDelCurso: ( context )=> {
      context.commit(`cambiarCurso(state, 'Vue y Vuex')`)
    }
  },
  modules: {
  }
})
