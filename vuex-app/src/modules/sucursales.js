export default {
    namespaced: true,
    state: {
        sucursales: ['CABA', 'CÓRDOBA', 'MONTEVIDEO', 'LIMA', 'LAS CONDES']
    }, 
    mutations: {

    },
    actions: {

    },
    getters: {
        getSucursales: (state)=> {
            return state.sucursales
        }
    }
}