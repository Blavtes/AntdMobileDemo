export default {
    Host_Name: 'http://218.17.205.130:18285/APP_SERVER/',
    GJS_WAP_SERVER_HOST_ADDR: "http://218.17.205.130:18286/FTS_MOBILE/",

    GJS_GJF_FinancialProductList: "restapi/gjf/financial/getFixedProductList",//理财页

    GJS_ProductDetail: "restapi/financial/getProductDetail",//产品详情页

    GJS_GJF_FixedProductList: "restapi/gjf/fixed/getMyFixedProductList",//我的网贷 持有中

    GJS_DepositoryQueryUserTradeInfo: "restapi/depository/user/queryUserTradeInfo",//资金记录

    GJS_GJF_HistoryFixedProductList: "restapi/gjf/fixed/getMyHistoryFixedProductList",//历史收款列表

    GJS_GjfaxTicketList: "restapi/gjfaxTicket/getGjfaxTicketList",//我的广金券

    GJS_FUND_GETMYFIXEDPRODUCTDETAIL :"restapi/fixed/getMyFixedProductDetail",//我的网贷持有详情

    GJS_Product_Specification : "remote/product/getProductSpecification",//  普通定期产品 交易说明书

    GJS_GetUserInfo_Api  :"restapi/user/getUserInfo",//获取用户信息

    GJS_YueYueYing_CheckIdentityInfo :"restapi/depository/account/checkIdentityInfo",//开户验证 信息

    HX_GETGJFBANKCARDCONFIG :"restapi/depository/account/getBankCardConfig",//查询网贷银行卡列表支持信息

    HX_GETBANKCARD_BASECONFIG  :"restapi/system/getBankCardListConfig",//查询网贷银行卡列表基础信息(配置信息)

    /*? 数据加载?*/
    RequestLoadDefault:'dataRequestTypeDefault',//默认加载
    RequestLoadRefresh:'dataRequestTypeRefresh',//刷新加载
    RequestLoadMore:'dataRequestTypeLoadMore',//加载更多
    PageNum:20,//list 加载单页数量
    LoadEndStr:'没有了^_^',//
    LoadingStr:'正在加载中...',
    LoadingRefreshStr:'数据刷新中...',
    LoadDownDragStr:'下拉刷新',
    LoadUpDragStr:'上拉加载更多',
    LoadNullStr:'暂无数据',
    // Loading
    RequestSuccess:'success',//请求返回成功
    RequestFail:'error',//请求返回错误
    TitleFlag:'RN',//title 标记
    UUID:'B86D519D-83F7-4C86-906D-3F9D16FF9994',//uuid
}