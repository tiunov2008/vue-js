export const navigate = {
    methods:{
        navigate(id){
            this.$router.push({name: "goods", params: {id: id}});
        }
    }
}``