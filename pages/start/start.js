// start.js

Page({
    data: {

    },
    //跳转到图片识别的口令验证页面
    navigate: function() {
        wx.navigateTo({
            url: '../wifi_station/tianqi/tianqi',
        })
    }
})