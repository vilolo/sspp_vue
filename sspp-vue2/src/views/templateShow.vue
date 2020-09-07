<template>
<div>
    <div class="row-item">
            <label v-for="item in list" v-bind:key="item.id"><input @change="doChange" :value="item.id" type="radio" v-model="itemId" name="platform" style="margin-left:20px;"> {{item.name}}</label>
        </div>
    <div class="row-item" v-for="(item, i) in list" v-show="radioList[item.id]" v-bind:key="item.id" >
        <span class="btn btn-primary" @click="doSave(i)">保存</span><br>
        <input v-model="item.name"><br><br>
        <textarea style="width: 800px; height: 800px;" v-model="item.content"></textarea>
    </div>
</div>
</template>
<script>
export default {
    data: function(){
        return {
            list:[],
            radioList:{},
            itemId: ''
        }
    },
    mounted: function(){
        this.$http.get('v1/basic/template/desc', [])
        .then(res => {
            this.list = res.data
            this.itemId = this.list[0].id
            this.list.forEach((item, i) => {
                this.$set(this.radioList, item.id, i==0?true:false)
            })
        })
    },
    methods: {
        doChange:function(){
            for(var key in this.radioList){
                this.radioList[key] = key == this.itemId ? true : false
            }
        },
        doSave:function(id){
            this.$http.post('v1/basic/template/update?id='+this.list[id].id, {
                content:this.list[id].content,
                name:this.list[id].name
            }).then(res => {
                alert(res.message)
            })
        }
    }
}
</script>
<style scoped>
.row-item{padding: 20px; margin-bottom: 10px; border-bottom: 1px #ccc solid;}
.row-item .btn{margin: 10px;}
.row-item img{height: 50px; margin: 5px;}
</style>