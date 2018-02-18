var menuCellFunc = require("../common/template-menucell/func.js");

Page({

  data: {
    list: [
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      },
      {
        id: 'nav',
        name: '网络与微信',
        open: false,
        pages: ['request', 'login', 'userInfo']
      }
    ]
  },

  menuToggle: function (e) {
    var id = e.currentTarget.id;
    var list = this.data.list;

    menuCellFunc.toggleOpen(id, list)

    this.setData({ list: list });
  }
})