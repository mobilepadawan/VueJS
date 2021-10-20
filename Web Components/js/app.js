Vue.component('codermeals-card', {
    props: {
            titulo: String,
            portada: String,
            costo: Number
        },
    template: `<div align="center">
                <div>
                    <img class="img-thumbnail img-cropped" :src="portada" :title="titulo">
                    <br><br>
                    <p>{{ titulo }}</p>
                    <p class="text-black">$<strong> {{ costo }}</strong></p>
                    <button class="btn btn-success btn-rounded">Agregar</button>
                </div>
                </div>`
    })

    const app = new Vue({
        el: '#app',
        data: {
            codermeals: [
                {
                    id: 1, 
                    titulo: "Spaghetti alla puttanesca",
                    costo: 575.00,
                    portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"
                },
                {
                    id: 2, 
                    titulo: "Pizza Napoletana ai carciofi",
                    costo: 675.00,
                    portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"
                },
                {
                    id: 3, 
                    titulo: "Porchetta umbra a cottura lunga", 
                    costo: 845.00,
                    portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"
                },
                {   
                id: 4, 
                titulo: "Orecchiette alle cime di rapa", 
                costo: 845.00,
                portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
                }
                ]
        },
        methods: {
        },
        computed: {
        }
})