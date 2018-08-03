import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `sierpinski-triangle`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

Array.prototype.random = function() { return this[Math.floor((Math.random()*this.length))]; };

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  distance(other) {
    return new Point(
      this.x - other.x,
      this.y - other.y
    );
  }
  
  halfway(other) {
    const distance = this.distance(other);
    return new Point(
      this.x - (distance.x / 2),
      this.y - (distance.y / 2)
    );
  }
}

class Sierpinski {
  constructor(canvas) {
    this.x_size = canvas.width;
    this.y_size = canvas.height;
    this.points = [
      new Point(this.x_size / 2, 0),
      new Point(0, this.x_size * Math.cos(Math.PI / 6)),
      new Point(this.x_size, this.x_size * Math.cos(Math.PI / 6))
    ];
    this.current_point = new Point(
      Math.floor((Math.random() * this.x_size)),
      Math.floor((Math.random() * this.y_size))
    );
    this.canvas = canvas.getContext('2d');
    for (const point of this.points) {
      this.drawPoint(point);
    }
  }
  
  drawPoint(point) {
    const c = this.canvas;
    c.fillStyle = "#000000";
    c.beginPath();
    c.arc(point.x, point.y, 1, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();
  }
  
  draw() {
    const midpoint = this.current_point.halfway(this.points.random());
    this.drawPoint(midpoint);
    this.current_point = midpoint;
  }
}

class SierpinskiTriangle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        
    `;
  }
  
  connectedCallback() {
    super.connectedCallback();
    const triangle = new Sierpinski(canvas);
    for (let i = 0; i < 100000; i++){
      triangle.draw();
    }
  }
}

window.customElements.define('sierpinski-triangle', SierpinskiTriangle);
