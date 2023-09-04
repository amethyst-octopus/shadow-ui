/**takes hex color in "#000000" or in "#000" format and turns into rgb number values
 * {r:000, g:000, b:000}
 */
function hexToRGB(hex) {
  if (hex.length == 4) {
    let r = hex.slice(1, 2);
    let g = hex.slice(2, 3);
    let b = hex.slice(3, 4);

    r = parseInt(r + r, 16);
    g = parseInt(g + g, 16);
    b = parseInt(b + b, 16);

    return { r, g, b };
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // return {r, g, b}
  return { r, g, b };
}

/** TBD if this will be needed */
function hexToHSL(hex) {

}

/**takes an rgb color code and converts to hex color
 *  {r:000, g:000, b:000} => "#000000"
 */
function rgbToHex(rgb) {
  let hex = "#";
  for (let color in rgb) {
    const colorCode = rgb[color].toString(16);
    hex += colorCode.length === 2 ? colorCode : "0" + colorCode;
  }

  return hex;
}


/** takes a hex color and returns light and dark shadow hex colors
 *
 * "#000000" => {lightShadow: "#000000", darkShadow:"#000000"}
 */
function colorToShadows(hex) {
  let rgb = hexToRGB(hex);

  let lightShadow = {};

  for (let color in rgb) {
    let c = Math.round(Math.min(Math.max(0, rgb[color] + rgb[color] * 0.15), 255));
    lightShadow[color] = c;
  }

  lightShadow = rgbToHex(lightShadow);

  let darkShadow = {};

  for (let color in rgb) {
    let c = Math.round(Math.min(Math.max(0, rgb[color] + rgb[color] * -0.15), 255));
    darkShadow[color] = c;
  }

  darkShadow = rgbToHex(darkShadow);


  return { lightShadow, darkShadow };
}