// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
const app = new Vue({

    el: '#app',

    data: {

        mailGenerate : [],

    },
   
    methods: {
        
    },

    mounted() {

        // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
        for (let index = 1; index < 10; index++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.mailGenerate.push(response.data.response)
                console.log(this.mailGenerate);
            })      
        } 
    },
})