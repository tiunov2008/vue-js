export const navigate = {
    methods:{
        navigate(id){
            this.$router.push({name: "second", params: {id: id}});
        }
    }
}