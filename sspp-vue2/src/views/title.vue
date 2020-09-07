<template>
<div class="card-body">
    <div class="form-group"><input class="form-control" v-model="title"></div>
    
    <div class="form-group">
        <button class="btn btn-success toastrDefaultSuccess" style="margin-left:5px;" v-for="v in wordPool" @click="addword(v)" v-bind:key="v.index">{{v}}</button>
    </div>

    <div class="form-group">
        <select multiple style="height:120px;" class="form-control custom-select" v-model="selectData" @change="category($event.target.value, true)">
            <option v-for="(item, i) in wordPoolList" :value="i" v-bind:key="item.index">{{i}}</option>
        </select>
    </div>

    <div class="form-group"><textarea style="height: 150px;" class="form-control" @input="descInput" v-model="wordShow"></textarea></div>
    <input v-model="newName"><br>
    <span class="btn btn-primary" @click="doSave">保存</span>
</div>
</template>
<script>
export default {
    data: function(){
        return {
            title:'',
            wordPool:[],
            wordShow:'',
            wordPoolList:{},
            wordPoolIdList:{},
            curKey:'',
            selectData:[],
            newName:''
        }
    },
    //  created: function(){
    //     const s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = 'http://local.shop/keywordList.js';
    //     document.body.appendChild(s);

    //     s.onload = () => {
    //         this.wordPoolList = window.keywordList
    //         this.category(Object.keys(this.wordPoolList)[0])
    //     }
    // },
    created: function(){
        this.$http.get('v1/basic/template/word', [])
        .then(res => {
            for(var key in res.data){
                //this.wordPoolList.push({[res.data[key].name]:res.data[key].content})
                this.wordPoolList[res.data[key].name] = res.data[key].content == null ? '' : res.data[key].content
                this.wordPoolIdList[res.data[key].name] = res.data[key].id
            }
            this.category(Object.keys(this.wordPoolList)[0], true)
        })
    },
    methods: {
        addword: function(str){
            this.title += str.replace(/{.*}/, '').replace(/(^\s*)|(\s*$)/g, "") + ' '
        },
        category: function(k, isChange){
            this.wordShow = this.wordShow.replace('，', ",")
            if(this.wordShow.replace(/(^\s*)|(\s*$)/g, "").length > 1){
                this.wordPoolList[this.curKey] = this.wordShow.replace(/(^\s*)|(\s*$)/g, "")
            }
            if(isChange){
                this.wordShow = this.wordPoolList[k]
                this.newName = k
            }
            this.wordPool = this.wordPoolList[k].split(',')
            this.curKey = k
            this.selectData = [k]
        },
        descInput: function(){
            this.category(this.curKey)
        },
        doSave:function(){
            this.$http.post('v1/basic/template/update?id='+this.wordPoolIdList[this.curKey], {
                content:this.wordShow,
                name:this.newName
            }).then(res => {
                alert(res.message)
            })
        }
    }
}
</script>>