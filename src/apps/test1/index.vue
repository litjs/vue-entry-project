<template>
    <div>helloworld! <span>{{$t('index.name')}}</span></div>
</template>
<script type="text/ecmascript-6">
    export default {
        computed: {
            ...Vuex.mapState({
                index: state => state.index
            })
        },
        mounted(){
            console.log(this.$root.config.theme)
            console.log(this.index.title)
        }
    }
</script>