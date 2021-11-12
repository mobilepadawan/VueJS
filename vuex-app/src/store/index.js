import Vue from 'vue'
import Vuex from 'vuex'
import sucursales from '/src/modules/sucursales'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    productos: [{id: 1, nombre: 'Monitor 24'},
                {id: 2, nombre: 'Monitor Ultrawide 32'},
                {id: 3, nombre: 'Monitor Wide 27'},
                {id: 4, nombre: 'Monitor 21.5'},
                {id: 5, nombre: 'Monitor 27'}]
    },    
    msg: 'Variable de State declarada en Store.',
    nombreDelCurso: 'Vue y Vuex!',
    profesion: 'Coder',
    ubicacion: 'house',

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
