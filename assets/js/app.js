// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
const app = new Vue({

    el: '#app',

    data: {

        mailGenerate : [],
        // mailComplete : [],

    },
   
    methods: {
        
    },

    mounted() {

        // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
        for (let index = 0; index < 10; index++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.mailGenerate.push(response.data.response)

                //Far comparire gli indirizzi email solamente quando sono stati tutti generati.
                // if(this.mailGenerate.length === 10){
                    
                //     this.mailComplete = this.mailGenerate
                // }
                
            })      
        } 
    },
})