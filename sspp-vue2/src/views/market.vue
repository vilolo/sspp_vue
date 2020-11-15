<template>
    <div>
        <div>
            Keyword: <input v-model="keyword" /> <button @click="marketByKeyword">查询</button>
        </div>
        <br>
        <div>
            <div class="btn btn-primary">商品总数: <span>{{total_count}}</span></div>&nbsp;&nbsp;
            <div class="btn btn-primary">当前查询销量之和: <span>{{count_sold}}</span></div>&nbsp;&nbsp;
            <div class="btn btn-primary">广告数: <span>{{total_ads_count}}</span></div>&nbsp;&nbsp;
            <div class="btn btn-primary">平均价格: <span>{{avgPrice}}</span></div>&nbsp;&nbsp;
            <div class="btn btn-primary">当前查询/商品总数: <span>{{avgSold}}</span></div>
        </div>
        <div>
            <div v-for="item in goodsList" :key="item.id">
                <a :href="item.url" target="_blank">{{item.name}}</a><br>
                <span class="btn btn-success">价格：{{item.price}}RM</span>&nbsp;&nbsp;
                <span class="btn btn-success">上架时间{{item.ctime}}</span>&nbsp;&nbsp;
                <span class="btn btn-success">上架天数：{{item.days}}</span>&nbsp;&nbsp;
                <span class="btn btn-success">点赞：{{item.liked_count}}</span>&nbsp;&nbsp;
                <span class="btn btn-success">浏览：{{item.view_count}}</span>&nbsp;&nbsp;
                <span class="btn btn-success">历史总销量：{{item.historical_sold}}</span>&nbsp;&nbsp;
                <span class="btn btn-danger">近期销量：{{item.sold}}</span><br>
                <span class="btn btn-success">是否广告：{{item.ads_keyword}}</span><br>
                <img width="100px" v-for="img in item.images" :key="img.id" :src="img" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            marketInfo: "",
            shopList: "",
            keyword:'',

            total_count:0,
            count_sold:0,
            total_ads_count:0,
            avgPrice:0,
            avgSold:0,

            goodsList:[]
        }
    },
    methods:{
        marketByKeyword: function(){
            this.$http.get('v1/basic/market/index', {keyword:this.keyword})
            .then(res => {
                console.log(res)
                this.total_count = res['data']['info']['total_count']
                this.count_sold = res['data']['info']['count_sold']
                this.total_ads_count = res['data']['info']['total_ads_count']
                this.avgPrice = res['data']['info']['avgPrice']
                this.avgSold = res['data']['info']['avgSold']
                this.goodsList = res['data']['goodsList']
            })
        }
    }
}
</script>
<style scoped>
.btn{margin: 5px;}
</style>