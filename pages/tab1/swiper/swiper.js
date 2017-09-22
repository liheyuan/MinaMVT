// pages/tab1/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    autoplay: false,
    interval: 3000,
    duration: 500,
    showDots: true
  },

  changeShowDots: function (e) {
    this.setData({showDots: !this.data.showDots})
  },

  changeAutoplay: function (e) {
    this.setData({ autoplay: !this.data.autoplay })
  },

  durationChange: function(e) {
    this.setData({duration: e.detail.value})
  },

  intervalChange: function (e) {
    this.setData({interval: e.detail.value })
  }
})