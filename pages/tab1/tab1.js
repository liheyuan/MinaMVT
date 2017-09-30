// pages/tab1.js
var menuCellFunc = require("../common/template-menucell/func.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
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