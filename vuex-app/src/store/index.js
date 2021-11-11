import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    getConcatState: (state)=> {
      return `${state.profesion} ${state.ubicacion}`
    }
  }
})
