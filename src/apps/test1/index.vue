<template>
    <div>helloworld! <span>{{$t('index.name')}}</span></div>
</template>
<script>
    export default {
        computed:{
            state(){
                return this.$store.index
            }
        },
        mounted(){
            console.log(this.$root.config.theme)
            console.log(this.state.title)
        }
    }
</script>