var menuCellFunc = require("../common/template-menucell/func.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
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