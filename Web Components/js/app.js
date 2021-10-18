Vue.component('trailerflix-moviecard', {
    props: ['cover', 'title'],
    template: `<div align="center" width="140">
                    <img :src="cover" :alt="title" :title="title" width="140">
                    <br>
                    <p>{{ title }}</p>
               </div>`

})

var app = new Vue({
    el: '#app',
    data: {
        titulo: "The Social Network",
        portada: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
        coderflix: [
                    {id: 1, titulo: "The Social Network", portada: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png"},
                    {id: 2, titulo: "The Circle", portada: "https://upload.wikimedia.org/wikipedia/en/8/80/The_Circle_%282017_film%29.png"},
                    {id: 3, titulo: "Antitrust", portada: "https://upload.wikimedia.org/wikipedia/en/2/2a/Antitrust_poster.jpg"}
                   ]
    },
    methods: {

    },
    computed: {

    }
})