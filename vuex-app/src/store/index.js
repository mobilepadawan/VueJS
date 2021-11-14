import Vue from 'vue'
import Vuex from 'vuex'
import sucursales from '/src/modules/sucursales'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    msg: 'Variable de State declarada en Store.',
    nombreDelCurso: 'Vue y Vuex!',
    profesion: 'Coder',
    ubicacion: 'house',
    productos: []
  },
  mutations: {
    configurarProductos: (state, productos) => {
      state.productos = productos
    },
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
  })
