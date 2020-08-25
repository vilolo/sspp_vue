<template>
    <div>
        <div class="row-item">
            工具列表：
            <span class="btn btn-primary" @click="openUrl(urlList.dianxiaomi)" >店小秘</span>
            <span class="btn btn-primary" @click="openUrl(urlList.shops)" >店铺</span>
            <span class="btn btn-primary" @click="openUrl(urlList.fanyi)" >翻译</span>
            <span class="btn btn-primary" @click="openUrl(urlList.categories)" >分类列表</span>
            <span class="btn btn-primary" @click="openUrl(urlList.getKeyword)" >站內关键词</span>
            <span class="btn btn-primary" @click="openUrl(urlList.getPrice)" >定价</span>
            <span class="btn btn-primary" @click="openUrl(urlList.templates)" >模板</span>
            <span class="btn btn-primary" @click="openUrl(urlList.remarkImg)" >备忘图片</span>
            <span class="btn btn-primary" @click="openUrl(urlList.trends)" >趋势</span>
            <span class="btn btn-primary" @click="openUrl(urlList.taobao)" >淘宝 | 阿里巴巴</span>
        </div>

        <div class="row-item">
            <span class="btn btn-primary" @click="openUrl(urlList.checkList)" >1.查看订单，聊天</span>
        </div>
        
        <div class="row-item">
            <span class="btn btn-primary"  @click="openKeywords(4)">2.參考台湾店铺</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="openKeywords(3)">马来店铺</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="openKeywords(1)">马来站</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="openKeywords(2)">台湾站</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <pre>
<textarea class="tbox" rows="10" cols="100">
動漫
文具
生活
</textarea>
</pre>
            <span class="btn btn-primary" @click="openKeywordAll()" >选品参考</span>
            <br>
            <input v-model="enKeyword" placeholder="en">
            <button @click="openUrl(urlList.enKeywordUrls, enKeyword)">英文</button>
            <br><br>
            <input v-model="cnKeyword" placeholder="zh-Simplified">
            <button @click="openUrl(urlList.cnKeywordUrls, cnKeyword, true)">中文</button>
            <br><br>
            <input v-model="fantiKeyword" placeholder="zh-Traditional">
            <button @click="openUrl(urlList.fantiKeywordUrls, fantiKeyword)">繁体字</button>
            <br><br>

            <h2>分类打开</h2>
            <span class="btn btn-primary" @click="openUrl(urlList.myCategoryCodeUrl, my_3_val)">马来分类</span><br>
            <select @change="myChangeOne" id="mSel1">
            <option v-for="(item, index) in my_c_1" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <select @change="myChangeTwo" id="mSel2">
                <option v-for="(item, index) in my_c_2" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <select v-model="my_3_val" id="mSel3">
                <option v-for="(item, index) in my_c_3" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <br><br>

            <span class="btn btn-primary" @click="openUrl(urlList.twCategoryCodeUrl, tw_4_val?tw_4_val:tw_3_val)">台湾分类</span><br>
            <select @change="twChangeOne" id="tSel1">
                <option v-for="(item, index) in tw_c_1" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <select @change="twChangeTwo" id="tSel2">
                <option v-for="(item, index) in tw_c_2" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <select v-model="tw_3_val"  @change="twChangeThree" id="tSel3">
                <option v-for="(item, index) in tw_c_3" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <select v-model="tw_4_val">
                <option v-for="(item, index) in tw_c_4" :value="item" v-bind:key="index">{{index}}</option>
            </select>
            <br><br>

        </div>

        <div class="row-item">
            <span class="btn btn-primary" @click="openUrl(urlList.dataList)" >3.店铺数据</span>
        </div>

    </div>
</template>
<script>
import {urlList} from '../common/urlList2'
import {$URL} from '../common/gbk'
import {tw_c, my_c} from '../common/category'
import $ from 'jquery'

export default {
    data: function(){
        return {
            enKeyword: 'Cartoon stationery',
            cnKeyword: '动漫',
            fantiKeyword: '動漫',

            myShopKeyword: '',
            twShopKeyword: '',

            urlList:urlList,

            tw_c: tw_c,
            tw_c_1: tw_c[0],
            tw_c_2: {},
            tw_c_3: {},
            tw_c_4: {},
            tw_3_val: '8123',
            tw_4_val: '',

            my_c: my_c,
            my_c_1: my_c[0],
            my_c_2: {},
            my_c_3: {},
            my_3_val: '11851',
        }
    },
    mounted: function(){
        this.my_c_2 = my_c['8']
        this.my_c_3 = my_c['8-80']
        $('#mSel1').val('8')
        $('#mSel2').val('8-80')

        this.tw_c_2 = tw_c['13']
        this.tw_c_3 = tw_c['13-147']
        $('#tSel1').val('13')
        $('#tSel2').val('13-147')

    },
    methods: {
        openUrl: function(urlList, keyword, isEncode){
            if (typeof(keyword) === 'undefined'){
                keyword = ''
            }

            if (keyword.length > 0 && isEncode == true){
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
            alert(val.target.value)
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

        openKeywords: function(type){
            let url = ''

            switch(type){
                case 1:
                    url = urlList.mUrl
                    break
                case 2:
                    url = urlList.tUrl
                    break
                case 3:
                    url = urlList.mpUrl
                    break
                case 4:
                    url = urlList.tpUrl
                    break
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
            this.openUrl(urlList.cnKeywordUrls, this.cnKeyword, true)
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
<style scoped>
.row-item{padding: 20px; margin-bottom: 10px; border-bottom: 1px #ccc solid;}
.row-item .btn{margin: 10px;}
</style>