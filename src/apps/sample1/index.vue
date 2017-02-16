<template>
    <div>
        <div>i18n title: {{$t('index.title')}}</div>
        <div>config: name: {{$root.config.name}}</div>
        <input type="text" v-model="ps.test.a.b.h">
        <div v-html="ps.test.a.b.h"></div>
        <img :src="img" alt="">
    </div>
</template>
<script>
    var pp = require('statics/app.png')
    export default {
        data:function(){
            return {img:pp}
        },
        computed: {
            ps(){
                return this.$store.index
            }
        },

        mounted(){
            Promise.all([])
            console.log('dfdfdfd')
            console.log(this.$t)
            console.log(this.$root.config.name)
        }
    }
</script>
