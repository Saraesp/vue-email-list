const{
	createApp
} = Vue;

createApp({
    data() {
        return {
            user_mail: []
        }
    },
    mounted(){
        for( let i = 0; i < 10; i++){
             axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.user_mail.push(result.data.response)
             })
        } 
    }
}).mount('#app');

