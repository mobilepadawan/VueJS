import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Variable de State declarada en Store',
    nombreDelCurso: 'Vue y Vuex!'
  },
  mutations: {
    cambiarCurso: (state)=> {
      state.nombreDelCurso = 'Vue y Vuex'
    }
  },
  actions: {
    cambiarNombreDelCurso: ( context )=> {
      context.commit(`cambiarCurso`)
    }
  },
  modules: {
  }
})
