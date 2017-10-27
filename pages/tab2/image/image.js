// pages/tab2/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "/image/1.jpg"
  },

  chooseImage: function () {
    var that = this
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      count: 1,
      success: function (res) {
        that.setData({
          src: res.tempFilePaths[0]
        })
      }
    })
  }
})