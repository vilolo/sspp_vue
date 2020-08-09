<template>
    <div>
        <div>
            <span class="btn btn-primary" @click="openUrl(urlList.checkList)" >1.查看订单，聊天</span>
        </div><br><hr>
        <div>
            <span class="btn btn-primary" @click="openUrl(urlList.dataList)" >2.查看数据总览，商品表现，商品诊断，行销活动，销售额</span>
        </div><br><hr>
        
        <div>
            <span class="btn btn-primary" @click="openUrl(urlList.lookforList)" >3.选品分类列表，趋势</span>
        </div><br>
        
        <select @change="myChangeOne">
            <option v-for="(item, index) in my_c_1" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select @change="myChangeTwo">
            <option v-for="(item, index) in my_c_2" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select v-model="my_3_val">
            <option v-for="(item, index) in my_c_3" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <button @click="openUrl(urlList.myCategoryCodeUrl, my_3_val)">Open M category Url</button>
        <br><br>

        <select @change="twChangeOne">
            <option v-for="(item, index) in tw_c_1" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select @change="twChangeTwo">
            <option v-for="(item, index) in tw_c_2" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select v-model="tw_3_val"  @change="twChangeThree">
            <option v-for="(item, index) in tw_c_3" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select v-model="tw_4_val">
            <option v-for="(item, index) in tw_c_4" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <button @click="openUrl(urlList.twCategoryCodeUrl, tw_4_val?tw_4_val:tw_3_val)">Open T category Url</button>
        <br><br>

        <h2>多关键词打开</h2>
        <textarea class="tbox" rows="10" cols="100"/><br>
        <button @click="openKeywords(1)">Open 马来</button>&nbsp;&nbsp;&nbsp;&nbsp;<button @click="openKeywords()">Open 台湾</button>
        
        <h2>关键词打开</h2>
        <input v-model="enKeyword" placeholder="en">
        <button @click="openUrl(urlList.enKeywordUrls, enKeyword)">英文</button>
        <br><br>
        <input v-model="cnKeyword" placeholder="zh-Simplified">
        <button @click="openUrl(urlList.cnKeywordUrls, cnKeyword)">中文</button>
        <br><br>
        <input v-model="fantiKeyword" placeholder="zh-Traditional">
        <button @click="openUrl(urlList.fantiKeywordUrls, fantiKeyword)">繁体字</button>
        <br><br>
        <button @click="openKeywordAll()">Open all</button>

        <hr>
        <div>
            <span class="btn btn-primary" @click="openUPgoods(urlList.upgoodsList)" >4.上架：店小秘，定价，翻译，模板</span>
        </div><br><hr>
    </div>
</template>
<script>
import {urlList} from '../common/urlList'
import {$URL} from '../common/gbk'
import {tw_c, my_c} from '../common/category'
import $ from 'jquery'

export default {
    data: function(){
        return {
             // ========== en =================
            enKeyword: '',

            // ========== cn =================
            cnKeyword: '',

            // ========== fanti =================
            fantiKeyword: '',

            urlList:urlList,

            tw_c: tw_c,
            tw_c_1: tw_c[0],
            tw_c_2: {},
            tw_c_3: {},
            tw_c_4: {},
            tw_3_val: '',
            tw_4_val: '',

            my_c: my_c,
            my_c_1: my_c[0],
            my_c_2: {},
            my_c_3: {},
            my_3_val: '',
        }
    },
    methods: {
        openUrl: function(urlList, keyword){
            if (typeof(keyword) === 'undefined'){
                keyword = ''
            }

            if (keyword.length > 0){
                keyword = $URL.encode(keyword)
            }
            
            for (let item in urlList) {
                window.open(urlList[item].replace('@keyword@', keyword))
            }
        },

        myChangeOne: function(val){
            this.my_c_3 = {}
            this.my_c_2 = my_c[val.target.value]
        },
        myChangeTwo: function(val){
            this.my_c_3 = {}
            this.my_c_3 = my_c[val.target.value]
        },

        twChangeOne: function(val){
            console.log(val.target.value)
            this.tw_c_3 = {}
            this.tw_c_4 = {}
            this.tw_c_2 = tw_c[val.target.value]
            
        },
        twChangeTwo: function(val){
            this.tw_c_4 = {}
            this.tw_c_3 = tw_c[val.target.value]
        },
        twChangeThree: function(val){
            console.log(val.target.value)
            this.tw_c_4 = tw_c[val.target.value]
        },

        openKeywords: function(isMy){
            let url = ''
            if(isMy){
                url = urlList.mUrl
            }else{
                url = urlList.tUrl
            }

            let val = $('.tbox').val();
            if (val){
                let vlist = $('.tbox').val().split("\n");

                for(let i=0; i<vlist.length; i++){
                    let words = vlist[i].replace(/(^\s*)|(\s*$)/g, "");
                    if (words){
                        let src = url+"?keyword="+words;
                        window.open(src).location;
                    }
                    
                }
            }
        },

        openKeywordAll: function(){
            this.openUrl(urlList.enKeywordUrls, this.enKeyword)
            this.openUrl(urlList.cnKeywordUrls, this.cnKeyword)
            this.openUrl(urlList.fantiKeywordUrls, this.fantiKeyword)
        },

        openUPgoods: function(urlList){
            this.openUrl(urlList)

            let tempmy = this.$router.resolve({
                name: "tempmy"
            });
            window.open(tempmy.href, '_blank');

            let temptw = this.$router.resolve({
                name: "temptw"
            });
            window.open(temptw.href, '_blank');
        }
    }
} 
</script>