<template>
    <div>
        <div class="row-item">
            <div>
                <div>
                    <label v-for="(item, index) in storeList" v-bind:key="item.id"><input :value="index" type="radio" v-model="store" name="platform" style="margin-left:20px;"> {{item}}</label>
                </div>
                <div>
                    价格区间: <input v-model="minPrice" /> —— <input v-model="maxPrice" /> 
                </div><br>
                <div>
                    Keyword: <input v-model="keyword" /> <button @click="marketByKeyword(1, keyword)">查询</button>
                </div><br>
                <div>
                    店铺: <input v-model="shopname" /> <button @click="marketByKeyword(2, shopname)">查询</button>
                </div>
                <br>
                <div>
                    <!-- <router-link to='/collect'>
                        <button>跳转收藏</button>
                    </router-link> -->
                </div><br>
                <div>
                    <div class="btn btn-primary">商品总数: <span>{{total_count}}</span></div>&nbsp;&nbsp;
                    <div class="btn btn-primary">当前查询销量之和: <span>{{count_sold}}</span></div>&nbsp;&nbsp;
                    <div class="btn btn-primary">广告数: <span>{{total_ads_count}}</span></div>&nbsp;&nbsp;
                    <div class="btn btn-primary">平均价格: <span>{{avgPrice}}</span></div>&nbsp;&nbsp;
                    <div class="btn btn-primary">精确平均价格: <span>{{realAvgPrice}}</span></div>&nbsp;&nbsp;
                    <div class="btn btn-primary">当前查询/商品总数: <span>{{avgSold}}</span></div>
                </div>
                <div>
                    <!-- <div v-for="item in goodsList" :key="item.id">
                        <hr>
                        <a :href="item.url" target="_blank">{{item.name}}</a><br>
                        <span class="btn btn-success">价格：{{item.price}}</span>&nbsp;&nbsp;
                        <span class="btn btn-success">上架时间{{item.ctime}}</span>&nbsp;&nbsp;
                        <span class="btn btn-success">上架天数：{{item.days}}</span>&nbsp;&nbsp;
                        <span class="btn btn-success">点赞：{{item.liked_count}}</span>&nbsp;&nbsp;
                        <span class="btn btn-success">浏览：{{item.view_count}}</span>&nbsp;&nbsp;
                        <span class="btn btn-success">历史总销量：{{item.historical_sold}}</span>&nbsp;&nbsp;
                        <span class="btn btn-danger">近期销量：{{item.sold}}</span><br>
                        <span class="btn btn-success">是否广告：{{item.ads_keyword}}</span><br>
                        <img width="100px" v-for="img in item.images" :key="img.id" :src="img" />
                    </div> -->
                </div>
                <div>
                    <table class="table table-hover table-bordered" id="sampleTable">
                        <thead>
                        <tr>
                            <th>标题图片</th>
                            <th>价格</th>
                            <th>上架时间</th>
                            <th>上架天数</th>
                            <th>历史总销量</th>
                            <th>总销量avg</th>
                            <th>近期销量</th>
                            <th>点赞</th>
                            <th>点赞avg</th>
                            <th>浏览</th>
                            <th>浏览avg</th>
                            <th>是否广告</th>
                            <th>地区</th>
                        </tr>
                        </thead>
                        <tbody class="items_list">
                        <tr v-for="item in goodsList" :key="item.id">
                            <td>
                                <a :href="item.url" target="_blank">{{item.name}}</a><br>
                                <img width="100px" v-for="img in item.images" :key="img.id" :src="img" />
                            </td>
                            <td>
                                {{item.price}}<br><button v-show="item.show" @click="collect(item)">收藏</button>
                            </td>
                            <td>{{item.ctime}}</td>
                            <td class="bg-primary color-palette">{{item.days}}</td>
                            <td>{{item.historical_sold}}</td>
                            <td class="bg-success color-palette">{{item.historical_sold_avg}}</td>
                            <td class="bg-danger color-palette">{{item.sold}}</td>
                            <td>{{item.liked_count}}</td>
                            <td>{{item.liked_count_avg}}</td>
                            <td>{{item.view_count}}</td>
                            <td>{{item.view_count_avg}}</td>
                            <td>{{item.ads_keyword}}</td>
                            <td>{{item.shop_location}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="row-item">
            <!-- <router-link to='/market'>
                <button>跳转查询</button>
            </router-link> -->
            <table class="table table-hover table-bordered" id="sampleTable2">
                <thead>
                    <tr>
                        <th>标题图片</th>
                        <th>价格</th>
                        <th>上架时间</th>
                        <th>上架天数</th>
                        <th>历史总销量</th>
                        <th>总销量avg</th>
                        <th>近期销量</th>
                        <th>点赞</th>
                        <th>点赞avg</th>
                        <th>浏览</th>
                        <th>浏览avg</th>
                        <th>是否广告</th>
                        <th>地区</th>
                    </tr>
                </thead>
                <tbody class="items_list">
                    <template v-for="item in goodsLogList">
                        <tr :key="item.id" v-if="item.show">
                            <td>
                                <a :href="item.url" target="_blank">{{item.name}}</a><br>
                                <img width="100px" v-for="img in item.images" :key="img.id" :src="img" />
                            </td>
                            <td>
                                {{item.price}}<br><button @click="delCollect(item)">删除</button>
                            </td>
                            <td>{{item.ctime}}</td>
                            <td class="bg-primary color-palette">{{item.days}}</td>
                            <td>{{item.historical_sold}}</td>
                            <td class="bg-success color-palette">{{item.historical_sold_avg}}</td>
                            <td class="bg-danger color-palette">{{item.sold}}</td>
                            <td>{{item.liked_count}}</td>
                            <td>{{item.liked_count_avg}}</td>
                            <td>{{item.view_count}}</td>
                            <td>{{item.view_count_avg}}</td>
                            <td>{{item.ads_keyword}}</td>
                            <td>{{item.shop_location}}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
var $ = require( 'jquery' )
import '../assets/plugins/datatables/jquery.dataTables.min.js'
import '../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js'
export default {
    data: function(){
        return {
            marketInfo: "",
            shopList: "",
            keyword:'bag',
            shopname:'ruixin001',

            total_count:0,
            count_sold:0,
            total_ads_count:0,
            avgPrice:0,
            avgSold:0,
            realAvgPrice:0,

            goodsList:[],

            lock:true,

            storeList:{
                my:'马来',
                tw:'台湾',
                th:'泰国',
                br:'巴西',
            },
            store:'my',
            dt:'',
            //&maxPrice=50&minPrice=10
            maxPrice:0,
            minPrice:0,

            goodsLogList:[],
        }
    },
    created() {
        this.$http.get('/v1/basic/goods/show-log')
            .then(res => {
                if (res['code'] == 200){
                    for(let key  in res['data']['goodsList']){
                        res['data']['goodsList'][key]['show'] = true
                    }
                    this.goodsLogList = res['data']['goodsList']
                }else{
                    alert(res['message'])
                }
            })
    },
    watch: {
        goodsList: function(){
            this.$nextTick(function(){
                if($('#sampleTable').DataTable()){
                    $('#sampleTable').DataTable().destroy()
                }
                $('#sampleTable').DataTable({
                    "aLengthMenu":[-1,100,50],
                    "order": [[ 2, "desc" ]],
                    
                    //表头固定
                    "fixedHeader": true,
                    "scrollX": "1500px",
                    "scrollY": "1000px",
                })
            })
        },
        goodsLogList: function(){
            this.$nextTick(function(){
                if($('#sampleTable2').DataTable()){
                    $('#sampleTable2').DataTable().destroy()
                }
                $('#sampleTable2').DataTable({
                    "aLengthMenu":[-1,100,50],
                    "order": [[ 2, "desc" ]],
                    
                    //表头固定
                    "fixedHeader": true,
                    "scrollX": "1500px",
                    "scrollY": "1000px",
                })
            })
        }
    },
    methods:{
        marketByKeyword: function(type, word){
            if (word.length<1){
                alert('搜索词不能为空')
            }

            $('.items_list').html('')

            if (this.lock){
                this.lock = false
                // this.goodsList = []
                var that = this
                setTimeout(function () {
                    that.$http.get('v1/basic/market/index', {keyword:word, store:that.store, type:type,minPrice:that.minPrice,maxPrice:that.maxPrice})
                    .then(res => {
                        that.lock = true
                        // console.log(res)

                        for(let key  in res['data']['goodsList']){
                            res['data']['goodsList'][key]['show'] = true
                        }

                        if (res['code'] == 200){
                            that.total_count = res['data']['info']['total_count']
                            that.count_sold = res['data']['info']['count_sold']
                            that.total_ads_count = res['data']['info']['total_ads_count']
                            that.avgPrice = res['data']['info']['avgPrice']
                            that.avgSold = res['data']['info']['avgSold']
                            that.goodsList = res['data']['goodsList']
                            that.realAvgPrice = res['data']['info']['realAvgPrice']
                        }else{
                            alert(res['message'])
                        }
                    })
                },1200);
            }else{
                alert('请勿频繁操作，或刷新重试')
            }     
        },
        collect: function(item){
            this.$http.post('v1/basic/goods/collect',{url:'',img:'',name:'',statistics:'',platform:'',json_item:item})
            .then(res => {
                if (res['code'] == 200){
                    item.show = false;
                }
            })
        }
    }
}
</script>
<style scoped>
@import url('../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css');
.btn{margin: 5px;}
.row-item{padding: 20px; margin-bottom: 10px; border-bottom: 1px #ccc solid;}
.row-item .btn{margin: 10px;}
.row-item img{height: 50px; margin: 5px;}
</style>