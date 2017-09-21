function toggleOpen(id, list) {

  for (var i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      list[i].open = !list[i].open;
    } else {
      list[i].open = false;
    }
  }
}

module.exports.toggleOpen = toggleOpen