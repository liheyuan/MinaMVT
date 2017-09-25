var texts = [
  '文案1',
  '文案2',
  '文案3',
  '文案4',
  '文案5',
  '文案6',
  '文案7',
  '文案8',
  '文案9',
  '文案10'
];


Page({

  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },

  lines: [],

  add: function (e) {

    this.lines.push(texts[this.lines.length])
    this.updateData()
  },

  remove: function (e) {
    this.lines.pop()
    this.updateData()
  },

  updateData: function (e) {
    this.setData({
      text: this.lines.join("\n"),
      canAdd: this.lines.length < texts.length,
      canRemove: this.lines.length >= 1
    })
  }

})