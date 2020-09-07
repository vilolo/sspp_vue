let urlList = {
    allStore:[
        //馬來
        'https://seller.my.shopee.cn/',
        'https://seller.my.shopee.cn/webchat/conversations',

        //台灣
        'https://seller.xiapi.shopee.cn/',
        'https://seller.xiapi.shopee.cn/webchat/conversations',

        //泰国
        'https://seller.th.shopee.cn/',
        'https://seller.th.shopee.cn/webchat/conversations',

        //巴西
        'https://seller.br.shopee.cn/',
        'https://seller.br.shopee.cn/webchat/conversations',
    ],
    dianxiaomi:['https://www.dianxiaomi.com/crawl/index.htm'],
    translate:['https://translate.google.cn/'],
    remarkImg:['http://local.demo/hello.php'],
    remarkText:[],
    trends:[
        'https://trends.google.com/trends/?geo=TW',
        'https://ads.google.com/aw/keywordplanner/home?ocid=344080210&euid=346009892&__u=8083458308&uscid=344080210&__c=7608148290&authuser=1'
    ],
    taobao:[
        'https://s.taobao.com/search?q=@keyword@',
		'https://s.1688.com/selloffer/offer_search.htm?keywords=@keyword@',
        'https://s.1688.com/kuajing/offer_search.htm?keywords=@keyword@',
        
        // 'https://s.taobao.com/search?q=%E5%8A%A8%E6%BC%AB',
        // 'https://s.1688.com/selloffer/offer_search.htm?keywords=%B6%AF%C2%FE',
        // 'https://s.1688.com/kuajing/offer_search.htm?keywords=%B6%AF%C2%FE'
    ],
    title:['http://sspp.local/#/title'],
    price:['http://local.shop/pricePro.html'],
    template:['http://sspp.local/#/template'],

    //tw
    tw: {
        orderAndChat:[
            'https://seller.xiapi.shopee.cn/',
            'https://seller.xiapi.shopee.cn/webchat/conversations',
            'https://seller.xiapi.shopee.cn/portal/product/list/all'
        ],
        shop:['https://xiapi.xiapibuy.com/vilolo99'],
        category:['https://seller.xiapi.shopee.cn/portal/categories'],
        keyword:['https://seller.xiapi.shopee.cn/portal/marketing/pas/assembly/4102764?from=1598803200&to=1598889599&group=yesterday'],
        dashboard:['https://seller.xiapi.shopee.cn/datacenter/dashboard'],
        performance:['https://seller.xiapi.shopee.cn/datacenter/products/performance'],
        diagnosis:['https://seller.xiapi.shopee.cn/datacenter/products/diagnosis'],
        ad:['https://seller.xiapi.shopee.cn/portal/marketing/pas/assembly?from=1598803200&to=1598889599&type=keyword&group=yesterday'],
    },

    my: {
        orderAndChat:[
            'https://seller.my.shopee.cn',
            'https://seller.my.shopee.cn/webchat/conversations',
            'https://seller.my.shopee.cn/portal/product/list/all'
        ],
        shop:['https://shopee.com.my/jiangcz.my'],
        category:['https://seller.my.shopee.cn/portal/categories'],
        keyword:['https://seller.my.shopee.cn/portal/marketing/pas/assembly/4102764?from=1598803200&to=1598889599&group=yesterday'],
        dashboard:['https://seller.my.shopee.cn/datacenter/dashboard'],
        performance:['https://seller.my.shopee.cn/datacenter/products/performance'],
        diagnosis:['https://seller.my.shopee.cn/datacenter/products/diagnosis'],
        ad:['https://seller.my.shopee.cn/portal/marketing/pas/assembly?type=keyword&from=1599235200&to=1599321599'],
    },

    th: {
        orderAndChat:[
            'https://seller.th.shopee.cn/',
            'https://seller.th.shopee.cn/webchat/conversations',
            'https://seller.th.shopee.cn/portal/product/list/all'
        ],
        shop:['https://th.xiapibuy.com/xiaofeifei.th'],
        category:['https://seller.th.shopee.cn/portal/categories'],
        keyword:[],
        dashboard:['https://seller.th.shopee.cn/datacenter/dashboard'],
        performance:['https://seller.th.shopee.cn/datacenter/products/performance'],
        diagnosis:['https://seller.th.shopee.cn/datacenter/products/diagnosis'],
        ad:[],
    },

    br: {
        orderAndChat:[
            'https://seller.br.shopee.cn/',
            'https://seller.br.shopee.cn/webchat/conversations',
            'https://seller.br.shopee.cn/portal/product/list/all'
        ],
        shop:['https://br.xiapibuy.com/youpin.br'],
        category:['https://seller.br.shopee.cn/portal/categories'],
        keyword:[],
        dashboard:['https://seller.br.shopee.cn/datacenter/dashboard'],
        performance:['https://seller.br.shopee.cn/datacenter/products/performance'],
        diagnosis:['https://seller.br.shopee.cn/datacenter/products/diagnosis'],
        ad:[],
    }
}

export {
    urlList
}