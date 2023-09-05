export default{
    components: {

    },
    data(){
        return{

        }
    },
    methods: {
        // for going back to the previous history
        goBack(){
            this.$router.go(-1);
        }
    },
}