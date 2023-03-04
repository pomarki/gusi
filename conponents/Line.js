const lineOptions = {
  mx: 60,
  my: 30,
  qx: 0,
  qy: 30,
  fx: 30,
  fy: 60,
  color: "var(--red)",
};

class Line {
  constructor(options) {
    this._mx = options.mx;
    this._my = options.my;
    this._qx = options.qx;
    this._qy = options.qy;
    this._fx = options.fx;
    this._fy = options.fy;
    this._color = options.color;
  }

  //d="M50,200 Q175,75 300,200"

  _generateLine() {
    this._line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this._line.setAttributeNS(
      null,
      "d",
      `M${this._mx}, ${this._my} Q${this._qx}, ${this._qy} ${this._fx}, ${this._fy}`
    );
    this._line.setAttributeNS(null, "stroke-width", "4");
    this._line.setAttributeNS(null, "stroke", this._color);

    return this._line;
  }

  generateSVG() {
    this._svgSprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this._svgSprite.setAttribute("width", "60");
    this._svgSprite.setAttribute("height", "70");
    this._svgSprite.setAttributeNS(null, "viewBox", "0 0 60 70");
    this._svgSprite.setAttributeNS(null, "fill", "none");

    let svgLine = this._generateLine();
    this._svgSprite.append(svgLine);
    return this._svgSprite;
  }
}

export { Line };
