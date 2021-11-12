import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< Updated upstream
import sucursales from '/src/modules/sucursales'

=======
//store/index.js
>>>>>>> Stashed changes
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    msg: 'Variable de State declarada en Store.',
    nombreDelCurso: 'Vue y Vuex!',
    profesion: 'Coder',
    ubicacion: 'house'
  },
  mutations: {
    cambiarCurso: (state)=> {
      state.nombreDelCurso = 'Vuex en Vue'
    }
  },
  actions: {
    cambiarNombreDelCurso: ( context )=> {
      context.commit(`cambiarCurso`)
    }
  },
  getters: {
    getMsg: (state)=> {
      return state.msg
    },
    getNombreDelCurso: (state)=> {
      return state.nombreDelCurso
    },
    getConcatStates: (state)=> {
      return `${state.profesion} ${state.ubicacion}`
    }
  },
  modules: {
    sucursales
  }
})
