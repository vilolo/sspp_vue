let urlList = {

    //1.查看订单，聊天
    checkList: [
        //馬來
        'https://seller.my.shopee.cn/',
        'https://seller.my.shopee.cn/webchat/conversations',

        //台灣
        'https://seller.xiapi.shopee.cn/',
        'https://seller.xiapi.shopee.cn/webchat/conversations'
    ],

    //2.查看数据总览，商品表现，商品诊断，行销活动，销售额
    dataList: [
        //馬來
        'https://seller.my.shopee.cn/datacenter/dashboard?ADTAG=leftbar&event_source=sidebar_my_data',
        'https://seller.my.shopee.cn/datacenter/products/performance',
        'https://seller.my.shopee.cn/datacenter/products/diagnosis',
        'https://seller.my.shopee.cn/datacenter/marketing/discount',
        'https://seller.my.shopee.cn/datacenter/sales/overview',
        

        //台灣
        'https://seller.xiapi.shopee.cn/datacenter/dashboard',
        'https://seller.xiapi.shopee.cn/datacenter/products/performance',
        'https://seller.xiapi.shopee.cn/datacenter/products/diagnosis',
        'https://seller.xiapi.shopee.cn/datacenter/marketing/discount',
        'https://seller.xiapi.shopee.cn/datacenter/sales/overview'
    ],

    //趋势
    lookforList: [
        'https://trends.google.com/trends/?geo=TW',
        'https://ads.google.com/aw/keywordplanner/home?ocid=344080210&euid=346009892&__u=8083458308&uscid=344080210&__c=7608148290&authuser=1',
        'https://seller.shopee.com.my/portal/categories',
        'https://seller.xiapi.shopee.cn/portal/categories',
        'https://seller.my.shopee.cn/portal/marketing/pas/assembly/862728?from=1597334400&to=1597420799&group=yesterday',
        'https://seller.xiapi.shopee.cn/portal/marketing/pas/assembly/4102764?from=1597334400&to=1597420799&group=yesterday',
        'https://shopee.com.my/search?keyword=stationery',
        'https://xiapi.xiapibuy.com/search?keyword=%E5%8B%95%E6%BC%AB',
    ],

    mUrl: 'https://shopee.com.my/search',
    tUrl: 'https://xiapi.xiapibuy.com/search',

    myCategoryCodeUrl: ['https://shopee.com.my/search?facet=@keyword@'],
    twCategoryCodeUrl: ['https://xiapi.xiapibuy.com/search?facet=@keyword@'],


    upgoodsList: [
        'https://www.dianxiaomi.com/crawl/index.htm',
        'http://198.35.45.87:7090/shop/my.html',
        'http://198.35.45.87:7090/shop/getprice.html',
        'https://translate.google.cn/',
        'https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=zh-TW',
        'https://seller.my.shopee.cn/portal/marketing/pas/assembly/862728?from=1597334400&to=1597420799&group=yesterday',
        'https://seller.xiapi.shopee.cn/portal/marketing/pas/assembly/4102764?from=1597334400&to=1597420799&group=yesterday'
    ],

    enKeywordUrls: [
		'https://shopee.com.my/search?keyword=@keyword@',
		'https://www.lazada.com.my/catalog/?q=@keyword@',
    ],
    cnKeywordUrls: [
		'https://s.taobao.com/search?q=@keyword@',
		'https://s.1688.com/selloffer/offer_search.htm?keywords=@keyword@',
		'https://s.1688.com/kuajing/offer_search.htm?keywords=@keyword@',
    ],
    fantiKeywordUrls: [
        'https://xiapi.xiapibuy.com/search?keyword=@keyword@',
    ],
    myShopUrl:['https://shopee.com.my/search_user?keyword=@keyword@'],
    twShopUrl:['https://xiapi.xiapibuy.com/search_user?keyword=@keyword@'],
    shopList:[
        'https://shopee.com.my/search_user?keyword=jiangcz.my',
        'https://shopee.com.my/search_user?keyword=anime',
        'https://xiapi.xiapibuy.com/search_user?keyword=vilolo99',
        'https://xiapi.xiapibuy.com/search_user?keyword=動漫',
        'http://local.demo/hello.php',
    ],
}

export {
    urlList
}
