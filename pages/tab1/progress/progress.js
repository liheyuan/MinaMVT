// pages/tab1/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.updateProgress()
  },

  updateProgress: function () {
    var that = this

    setTimeout(function () {

      var progress = that.data.progress + 10
      if (progress > 100) {
        progress = 0
      }

      that.setData({
        progress: progress
      });
      that.updateProgress()
    }, 500)
  }

})