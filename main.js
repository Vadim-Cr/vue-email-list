const {createApp} = Vue;

createApp({
    data () {
        return {
            emails: [],
        }
    },
    mounted () {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.addEmail(response.data.response);
                    console.log(response.data.response);
                });
        }
    },
    methods: {
        addEmail(email) {
            this.emails.push(email);
            console.log(this.emails);
        },
    },
}).mount("#myApp");
