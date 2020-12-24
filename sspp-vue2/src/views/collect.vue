<template>
    <div>
        <router-link to='/market'>
            <button>跳转查询</button>
        </router-link>
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
                <template v-for="item in goodsList">
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
</template>

<script>
var $ = require( 'jquery' )
import '../assets/plugins/datatables/jquery.dataTables.min.js'
import '../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js'
export default {
    data() {
        return {
            goodsList:[],
        }
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
        }
    },
    created() {
        this.$http.get('/v1/basic/goods/show-log')
            .then(res => {
                if (res['code'] == 200){
                    for(let key  in res['data']['goodsList']){
                        res['data']['goodsList'][key]['show'] = true
                    }
                    this.goodsList = res['data']['goodsList']
                }else{
                    alert(res['message'])
                }
            })
    },
    methods: {
        delCollect(item){
            this.$http.post('/v1/basic/goods/collect-del',{id:item.id})
            .then(res => {
                if (res['code'] == 200){
                    item.show = false;
                }else{
                    alert(res['message'])
                }
            })
        }
    }
}
</script>

<style scoped>
@import url('../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css');
.btn{margin: 5px;}
</style>