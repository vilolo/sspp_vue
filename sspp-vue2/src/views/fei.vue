<template>
    <div>
        <div class="row-item">
            工具列表：
            <span class="btn btn-primary" @click="openUrl(urlList.dianxiaomi)" >店小秘</span>
            <span class="btn btn-primary" @click="openUrl(urlList.translate)" >翻译</span>
            <span class="btn btn-primary" @click="openUrl(urlList.remarkImg)" >备忘图片</span>
            <span class="btn btn-primary" @click="openUrl(urlList.remarkText)" >备忘文本</span>
            <span class="btn btn-primary" @click="openUrl(urlList.trends)" >趋势</span>
            <span class="btn btn-primary" @click="openUrl(urlList.taobao)" >淘宝 | 阿里巴巴</span>
            <span class="btn btn-primary" @click="openUrl(urlList.title)" >标题关键词</span>
            <span class="btn btn-primary" @click="openUrl(urlList.price)" >定价</span>
        </div>

        <div class="row-item">
            <label for="twcb"><input id="twcb" v-model="twShow" style="margin-left:20px;" type="checkbox" checked> 台湾</label>
            <label for="mycb"><input id="mycb" v-model="myShow" style="margin-left:20px;" type="checkbox" checked> 马来</label>
            <label for="thcb"><input id="thcb" v-model="thShow" style="margin-left:20px;" type="checkbox" checked> 泰国</label>
            <label for="brcb"><input id="brcb" v-model="brShow" style="margin-left:20px;" type="checkbox" checked> 巴西</label>
        </div>

        <div class="row-item tw-item" v-show="twShow">
            台湾站：
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598557600806&di=a5f2ccf496a63bd02f2dc1e68be783c7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F26%2F20200726083630_iitUG.thumb.400_0.jpeg">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598557600806&di=a5f2ccf496a63bd02f2dc1e68be783c7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F26%2F20200726083630_iitUG.thumb.400_0.jpeg">
            <br>
            <span class="btn btn-primary" @click="openUrl( urlList.tw.orderAndChat)" >订单，聊天，我的商品</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开工具</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.tw.shop)" >店铺</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.category)" >分类列表</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.keyword)" >站内关键词</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.templateDesc)" >模板（产品描述，标题规则）</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.templateFeed)" >Feed模板</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.templateCustomer)" >客户好评模板</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开店铺数据</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.tw.dashboard)" >仪表盘</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.performance)" >商品表现</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.ad)" >广告</span>
        </div>

    </div>
</template>
<script>
import {urlList} from '../common/feiUrl'
import {$URL} from '../common/gbk'
import {tw_c, my_c} from '../common/category'
import $ from 'jquery'

export default {
    data: function(){
        return {
            urlList:urlList,
            twShow:true,
            myShow:true,
            thShow:true,
            brShow:true,
        }
    },

    mounted: function(){
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
.row-item img{height: 50px; margin: 5px;}
</style>