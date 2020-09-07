<template>
    <div>
        <div class="row-item">
            工具列表：
            <span class="btn btn-primary" @click="openUrl(urlList.allStore)" >打开所有订单和后台</span>
            <span class="btn btn-primary" @click="openUrl(urlList.dianxiaomi)" >店小秘</span>
            <span class="btn btn-primary" @click="openUrl(urlList.translate)" >翻译</span>
            <span class="btn btn-primary" @click="openUrl(urlList.remarkImg)" >备忘图片</span>
            <span class="btn btn-primary" @click="openUrl(urlList.trends)" >趋势</span>
            <span class="btn btn-primary" @click="openUrl(urlList.title)" >标题关键词</span>
            <span class="btn btn-primary" @click="openUrl(urlList.price)" >定价</span>
            <span class="btn btn-primary" @click="openUrl(urlList.template)" >模板和备忘本</span><br>
            <input v-model="searchKeyword">
            <span class="btn btn-primary" @click="openUrl(urlList.taobao, searchKeyword, true)" >淘宝 | 阿里巴巴</span>
        </div>

        <div class="row">
            <div class="">
                <div class="card card-primary card-tabs">
                    <div class="card-header p-0 pt-1">
                        <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Messages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="custom-tabs-one-settings-tab" data-toggle="pill" href="#custom-tabs-one-settings" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="false">Settings</a>
                        </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-one-tabContent">
                        <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur. 
                        </div>
                        <div class="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam. 
                        </div>
                        <div class="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                            Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna. 
                        </div>
                        <div class="tab-pane fade" id="custom-tabs-one-settings" role="tabpanel" aria-labelledby="custom-tabs-one-settings-tab">
                            Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis. 
                        </div>
                        </div>
                    </div>
                <!-- /.card -->
                </div>
            </div>
        </div>

        <div class="row-item">
            <label for="twcb"><input id="twcb" v-model="twShow" style="margin-left:20px;" type="checkbox" checked> 台湾</label>
            <label for="mycb"><input id="mycb" v-model="myShow" style="margin-left:20px;" type="checkbox" checked> 马来</label>
            <label for="thcb"><input id="thcb" v-model="thShow" style="margin-left:20px;" type="checkbox" checked> 泰国</label>
            <label for="brcb"><input id="brcb" v-model="brShow" style="margin-left:20px;" type="checkbox" checked> 巴西</label>
        </div>

        <div class="row-item tw-item" v-show="twShow">
            台湾站：
            <div class="images" v-viewer="{movable: false}">
                <img v-for="src in twImages" :src="src" :key="src.id">
            </div>
            <br>
            <span class="btn btn-primary" @click="openUrl( urlList.tw.orderAndChat)" >订单，聊天，我的商品</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开工具</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.tw.shop)" >店铺</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.category)" >分类列表</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.keyword)" >站内关键词</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开店铺数据</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.tw.dashboard)" >仪表盘</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.performance)" >商品表现</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.diagnosis)" >商品诊断</span>
            <span class="btn btn-success" @click="openUrl( urlList.tw.ad)" >广告</span>
        </div>

        <div class="row-item tw-item" v-show="myShow">
            马来站：
            <div class="images" v-viewer="{movable: false}">
                <img v-for="src in myImages" :src="src" :key="src.id">
            </div>
            <br>
            <span class="btn btn-primary" @click="openUrl( urlList.my.orderAndChat)" >订单，聊天，我的商品</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开工具</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.my.shop)" >店铺</span>
            <span class="btn btn-success" @click="openUrl( urlList.my.category)" >分类列表</span>
            <span class="btn btn-success" @click="openUrl( urlList.my.keyword)" >站内关键词</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开店铺数据</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.my.dashboard)" >仪表盘</span>
            <span class="btn btn-success" @click="openUrl( urlList.my.performance)" >商品表现</span>
            <span class="btn btn-success" @click="openUrl( urlList.my.diagnosis)" >商品诊断</span>
            <span class="btn btn-success" @click="openUrl( urlList.my.ad)" >广告</span>
        </div>

        <div class="row-item tw-item" v-show="thShow">
            泰国站：
            <div class="images" v-viewer="{movable: false}">
                <img v-for="src in thImages" :src="src" :key="src.id">
            </div>
            <br>
            <span class="btn btn-primary" @click="openUrl( urlList.th.orderAndChat)" >订单，聊天，我的商品</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开工具</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.th.shop)" >店铺</span>
            <span class="btn btn-success" @click="openUrl( urlList.th.category)" >分类列表</span>
            <span class="btn btn-success" @click="openUrl( urlList.th.keyword)" >站内关键词</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开店铺数据</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.th.dashboard)" >仪表盘</span>
            <span class="btn btn-success" @click="openUrl( urlList.th.performance)" >商品表现</span>
            <span class="btn btn-success" @click="openUrl( urlList.th.diagnosis)" >商品诊断</span>
            <span class="btn btn-success" @click="openUrl( urlList.th.ad)" >广告</span>
        </div>

        <div class="row-item tw-item" v-show="brShow">
            巴西站：
            <div class="images" v-viewer="{movable: false}">
                <img v-for="src in brImages" :src="src" :key="src.id">
            </div>
            <br>
            <span class="btn btn-primary" @click="openUrl( urlList.br.orderAndChat)" >订单，聊天，我的商品</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开工具</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.br.shop)" >店铺</span>
            <span class="btn btn-success" @click="openUrl( urlList.br.category)" >分类列表</span>
            <span class="btn btn-success" @click="openUrl( urlList.br.keyword)" >站内关键词</span><br>
            <span class="btn btn-primary" @click="openUrl()" >批量打开店铺数据</span>👇🏻👇🏻<br>
            <span class="btn btn-success" @click="openUrl( urlList.br.dashboard)" >仪表盘</span>
            <span class="btn btn-success" @click="openUrl( urlList.br.performance)" >商品表现</span>
            <span class="btn btn-success" @click="openUrl( urlList.br.diagnosis)" >商品诊断</span>
            <span class="btn btn-success" @click="openUrl( urlList.br.ad)" >广告</span>
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
            searchKeyword:'动漫',
            twShow:true,
            myShow:true,
            thShow:true,
            brShow:true,
            twImages:[],
            myImages:[],
            thImages:[],
            brImages:[],
        }
    },

    mounted: function(){
        this.$http.get('v1/basic/image/index?dir=tw', [])
        .then(res => {
            this.twImages = res.data.tw
        })
        this.$http.get('v1/basic/image/index?dir=my', [])
        .then(res => {
            this.myImages = res.data.my
        })
        this.$http.get('v1/basic/image/index?dir=th', [])
        .then(res => {
            this.thImages = res.data.th
        })
        this.$http.get('v1/basic/image/index?dir=br', [])
        .then(res => {
            this.brImages = res.data.br
        })
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