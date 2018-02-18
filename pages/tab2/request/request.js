Page({

  data: {
    result: '',
    canAdd: true,
    canRemove: false
  },

  lines: [],

  request_get: function (e) {

    var that = this;

    wx.request({
      url: 'https://www.coder4.com/test.php', //仅为示例，并非真实的接口地址
      method: 'GET', // default GET
      data: {
        msg: 'hello'
      },
      success: function (res) {
        that.setData({
          result: res.data
        });
      }
    });
  },

  request_post_url: function (e) {

    var that = this;

    wx.request({
      url: 'https://www.coder4.com/test.php', // must https
      method: 'POST', // method POST
      header: {
        'content-type': 'application/x-www-form-urlencoded' // data as kv
      },
      data: {
        mykey: 'myval'
      },
      success: function (res) {
        that.setData({
          result: res.data
        });
      }
    });
  },

  request_post_json: function (e) {

    var that = this;

    wx.request({
      url: 'https://www.coder4.com/test.php', // must https
      method: 'POST', // method POST
      header: {
        'content-type': 'application/json' // data as json
      },
      data: {
        data: 'my data'
      },
      success: function (res) {
        that.setData({
          result: JSON.stringify(res.data) // return object, must cast to str
        });
      }
    });
  }

})