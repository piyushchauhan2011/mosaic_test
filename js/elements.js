// Tile class to create and hold reference to individual tiles
// e.g. Refer tests.js
class Tile {
  constructor() {
    this.el = document.createElement('span');
    this.el.innerHTML = '';
  }

  updateHTML(innerHTML) {
    this.el.innerHTML = innerHTML;
  }
}

// Mosaic class to hold tiles as its children nodes
// e.g. Refer tests.js
class Mosaic {
  constructor() {
    this.el = document.createElement('div');
    this.el.innerHTML = '';
  }

  updateStyle(style) {
    this.el.style = style;
  }
}