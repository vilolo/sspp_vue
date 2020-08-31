<template>
<div>
    <div><input v-model="title"></div>
    <div>
        <select @change="category($event)">
            <option v-for="(item, i) in wordPoolList"  v-bind:key="item.index">{{i}}</option>
        </select>
    </div>
    <button v-for="v in wordPool" @click="addword(v)" v-bind:key="v.index">{{v}}</button>
    <div><textarea v-model="wordShow"></textarea></div>
</div>
</template>
<script>
export default {
    data: function(){
        return {
            title:'',
            wordPool:[],
            wordShow:'',
            wordPoolList: {
                aa:'aaa{abc},b,c',
                bb:'1,2,3'
            }
        }
    },
    created: function(){
        this.wordPool = this.wordPoolList[0]
    },
    methods: {
        addword: function(str){
            this.title += ' ' + str
        },
        category: function(event){
            var a = event.target.value
            this.wordShow = this.wordPoolList[a]
            this.wordPool = this.wordPoolList[a].split(',');
            for (const key in this.wordPool) {
                this.wordPool[key] = this.wordPool[key].replace(/{.*}/, '');
            }
        }
    }
}
</script>>