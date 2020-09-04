<template>
<div>
</div>
</template>
<script>
export default {
    data: function(){
        return {
            list:''
        }
    },
    mounted: function(){
        this.$http.get('v1/basic/template/desc', [])
        .then(res => {
            console.log(res)
            this.list = res
        })
    }
}
</script>>