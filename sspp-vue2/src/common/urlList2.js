let urlList = {
    //店小秘
    dianxiaomi: ['https://www.dianxiaomi.com/crawl/index.htm'],
    //店铺
    shops: [
        'https://shopee.com.my/jiangcz.my',
        'https://xiapi.xiapibuy.com/vilolo99',
        'https://th.xiapibuy.com/xiaofeifei.th'
    ],
    //翻译
    fanyi: [
        'https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en',
        'https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN'
    ],
    //分类列表
    categories: [
        'https://seller.my.shopee.cn/portal/categories',
        'https://seller.xiapi.shopee.cn/portal/categories'
    ],
    //关键词
    getKeyword: [
        'https://seller.my.shopee.cn/portal/marketing/pas/assembly/862728?from=1598025600&to=1598111999&group=yesterday',
        'https://seller.xiapi.shopee.cn/portal/marketing/pas/assembly/4102764?from=1598025600&to=1598111999&group=yesterday'
    ],
    //定价
    getPrice: [
        'http://local.shop/my.html',
        'http://local.shop/getprice.html',
        'http://local.shop/pricePro.html',
    ],
    //模板
    templates: [
        'http://sspp.local/#/tempmy',
        'http://sspp.local/#/temptw',
        'http://sspp.local/#/tempth',
    ],
    //备忘图片
    remarkImg: ['http://local.demo/hello.php'],
    //趋势
    trends: [
        'https://trends.google.com/trends/?geo=TW',
        'https://ads.google.com/aw/keywordplanner/home?ocid=344080210&euid=346009892&__u=8083458308&uscid=344080210&__c=7608148290&authuser=1'
    ],
    //淘宝|阿里巴巴
    taobao: [
        'https://s.taobao.com/search?q=%E5%8A%A8%E6%BC%AB',
        'https://s.1688.com/selloffer/offer_search.htm?keywords=%B6%AF%C2%FE',
        'https://s.1688.com/kuajing/offer_search.htm?keywords=%B6%AF%C2%FE'
    ],

    //1.查看聊天和管理后台
    checkList: [
        //馬來
        'https://seller.my.shopee.cn/',
        'https://seller.my.shopee.cn/webchat/conversations',

        //台灣
        'https://seller.xiapi.shopee.cn/',
        'https://seller.xiapi.shopee.cn/webchat/conversations',

        //泰国
        'https://seller.th.shopee.cn/',
        'https://seller.th.shopee.cn/webchat/conversations',
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

    //选品参考
    lookForGoods:[
        //动漫 文具 生活
        'https://shopee.com.my/search_user?keyword=anime',
        'https://xiapi.xiapibuy.com/search_user?keyword=動漫',
        'https://xiapi.xiapibuy.com/search_user?keyword=文具',
        'https://shopee.com.my/search?keyword=anime&page=0&sortBy=ctime',
        'https://shopee.com.my/search?keyword=stationery&page=0&sortBy=ctime',
        'https://shopee.com.my/search?keyword=life&page=0&sortBy=ctime',
        'https://xiapi.xiapibuy.com/search?keyword=動漫&page=0&sortBy=ctime',
        'https://xiapi.xiapibuy.com/search?keyword=文具&page=0&sortBy=ctime',
        'https://xiapi.xiapibuy.com/search?keyword=生活&page=0&sortBy=ctime',

        'https://s.taobao.com/search?q=%E5%8A%A8%E6%BC%AB',
        'https://s.1688.com/selloffer/offer_search.htm?keywords=%B6%AF%C2%FE',
        'https://s.1688.com/kuajing/offer_search.htm?keywords=%B6%AF%C2%FE',

        'https://s.taobao.com/search?q=%E6%96%87%E5%85%B7',
        'https://s.1688.com/selloffer/offer_search.htm?keywords=%CE%C4%BE%DF',
        'https://s.1688.com/kuajing/offer_search.htm?keywords=%CE%C4%BE%DF',

        'https://s.taobao.com/search?q=%E7%94%9F%E6%B4%BB',
        'https://s.1688.com/selloffer/offer_search.htm?keywords=%C9%FA%BB%EE',
        'https://s.1688.com/kuajing/offer_search.htm?keywords=%C9%FA%BB%EE',
    ],

    enKeywordUrls: [
		'https://shopee.com.my/search?keyword=@keyword@&page=0&sortBy=ctime',
		'https://www.lazada.com.my/catalog/?q=@keyword@',
    ],
    cnKeywordUrls: [
		'https://s.taobao.com/search?q=@keyword@',
		'https://s.1688.com/selloffer/offer_search.htm?keywords=@keyword@',
		'https://s.1688.com/kuajing/offer_search.htm?keywords=@keyword@',
    ],
    fantiKeywordUrls: [
        'https://xiapi.xiapibuy.com/search?keyword=@keyword@&page=0&sortBy=ctime',
    ],

    mUrl: 'https://shopee.com.my/search',
    mpUrl: 'https://shopee.com.my/search_user',
    tUrl: 'https://xiapi.xiapibuy.com/search',
    tpUrl: 'https://xiapi.xiapibuy.com/search_user',

    myCategoryCodeUrl: ['https://shopee.com.my/search?facet=@keyword@'],
    twCategoryCodeUrl: ['https://xiapi.xiapibuy.com/search?facet=@keyword@'],

}

export {
    urlList
}
