class Lib {
  // fetch data from given url and returns a Promise
  static fetch(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = () => {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      }

      req.onerror = () => {
        reject(Error('Failed request'));
      }
      req.send();
    });
  }

  // converts uint value to hex string
  // e.g. 125 => '7d'
  static componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  // converts rgb color values to hex string
  // e.g. [125, 70, 12] => '7d460c'
  static rgbToCustomHex(r, g, b) {
    return Lib.componentToHex(r) + Lib.componentToHex(g) + Lib.componentToHex(b);
  }

  // calculates the average of rgb pixel color values for a given image data
  // e.g. see tests.js
  static averageColor(imgData) {
    let r, g, b, idx;
    idx = r = g = b = 0;
    // for each pixel as imgData is contains r,g,b,a on consecutive positions
    for (var i = TILE_HEIGHT * TILE_WIDTH; i > 0; i--) {
      // sum the colors
      r += imgData.data[idx++];
      g += imgData.data[idx++];
      b += imgData.data[idx++];
      idx++;
    }
    let total = idx / 4; // get the total count
    // calculate color average
    r /= total;
    g /= total;
    b /= total;

    return [r, g, b];
  }
}