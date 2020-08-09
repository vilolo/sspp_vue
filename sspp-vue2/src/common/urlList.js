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
    ],

    mUrl: 'https://seller.my.shopee.cn/search',
    tUrl: 'https://xiapi.xiapibuy.com/search',

    myCategoryCodeUrl: ['https://seller.my.shopee.cn/search?facet=@keyword@'],
    twCategoryCodeUrl: ['https://xiapi.xiapibuy.com/search?facet=@keyword@'],


    upgoodsList: [
        'https://www.dianxiaomi.com/crawl/index.htm',
        'http://198.35.45.87:7090/shop/my.html',
        'http://198.35.45.87:7090/shop/getprice.html',
        'https://translate.google.cn/',
        'https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=zh-TW',
    ],

    enKeywordUrls: [
		'https://seller.my.shopee.cn/search?keyword=@keyword@',
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
}

export {
    urlList
}
