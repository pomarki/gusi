const rectOptions = {
  type: "line",
  color: "var(--red)",
  class: "svg__line",
  width: "1",
  height: "50",
  x: "0",
  y: "0",
};

class Rect {
  constructor(options) {
    this._type = options.type;
    this._color = options.color;
    this._class = options.class;
    this._width = options.width;
    this._height = options.height;
    this._x = options.x;
    this._y = options.y;
  }

  _generateRectangle() {
    this._rect = document.createElementNS(ns, "rect");
    this._rect.setAttributeNS(null, "x", this._x);
    this._rect.setAttributeNS(null, "y", this._y);
    this._rect.setAttributeNS(null, "height", this._height);
    this._rect.setAttributeNS(null, "width", this._width);
    this._rect.setAttributeNS(null, "stroke-width", "0");
    this._rect.setAttributeNS(null, "fill", this._color);
    this._rect.classList.add(this._class);

    return this._rect;
  }

  generateLine() {
    this._svgLine = document.createElementNS(ns, "svg");
    this._svgLine.setAttribute("width", "190");
    this._svgLine.setAttribute("height", "190");
    this._svgLine.setAttributeNS(null, "viewBox", "0 0 50 50");
    this._svgLine.classList.add("diagram__chart");

    for (const key in this._languages) {
      let color = langArr.indexOf(key);

      let dasharray = this._languages[key];
      let values = {
        dasharray: dasharray,
        dashoffset: startOffset,
        color: color,
      };
      let diagramUnit = this._generateCircle(values);
      this._svgLine.append(diagramUnit);
      startOffset = startOffset - dasharray;
    }

    return this._svgLine;
  }


}

export { Rect };
