<template>
<div class="card-body">
    <div class="form-group"><input class="form-control" v-model="title"></div>
    
    <div class="form-group">
        <button class="btn btn-success toastrDefaultSuccess" style="margin-left:5px;" v-for="v in wordPool" @click="addword(v)" v-bind:key="v.index">{{v}}</button>
    </div>

    <div class="form-group">
        <select multiple class="form-control custom-select" @change="category($event.target.value)">
            <option v-for="(item, i) in wordPoolList"  v-bind:key="item.index">{{i}}</option>
        </select>
    </div>

    <div class="form-group"><textarea class="form-control" @input="descInput" v-model="wordShow"></textarea></div>
</div>
</template>
<script>
export default {
    data: function(){
        return {
            title:'',
            wordPool:[],
            wordShow:'',
            wordPoolList:'',
            curKey:'',
            test:''
        }
    },
     created: function(){
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://local.shop/keywordList.js';
        document.body.appendChild(s);

        s.onload = () => {
            this.wordPoolList = window.keywordList
            this.category(Object.keys(this.wordPoolList)[0])
        }
    },
    methods: {
        addword: function(str){
            this.title += str.replace(/{.*}/, '').replace(/(^\s*)|(\s*$)/g, "") + ' '
        },
        category: function(k){
            if(this.wordShow.replace(/(^\s*)|(\s*$)/g, "").length > 1){
                this.wordPoolList[this.curKey] = this.wordShow.replace(/(^\s*)|(\s*$)/g, "")
            }

            this.wordShow = this.wordPoolList[k]
            this.wordPool = this.wordPoolList[k].split(',')
            
            this.curKey = k
        },
        descInput: function(){
            this.category(this.curKey)
        }
    }
}
</script>>