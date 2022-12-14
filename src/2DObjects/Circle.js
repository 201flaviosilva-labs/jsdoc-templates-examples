import ObjectBase from "./Object.js";

/**
 * @param {number} x - The horizontal position of this circle.
 * @param {number} y - The vertical position of this circle.
 * @param {number} [radius=10] - The radius of this circle.
 * @param {number | string} [fillColor=0xffffff] - The color the circle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the circle, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * The Circle Shape is a 2D Object. 
 * 
 * @example
 * const circ = new Circle(400, 300, 50, "#ff0000", 0x00ff00);
 * 
 * @class Circle
 * @extends Objects.ObjectBase
 * @constructors
 * @memberof Objects
 */
export default class Circle extends ObjectBase {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;
	}

	/**
	 * @description
	 * Sets the X position of the Circle.
	 * 
	 * @example
	 * circ.x = 100;
	 * 
	 * @param {number} x - The horizontal position of this Circle in the world.
	 * @memberof Objects.Circle
	 */
	set x(x) { this.setX(x); }

	/**
	 * @description
	 * Sets the Y position of the Circle.
	 * 
	 * @example
	 * circ.y = 100;
	 * 
	 * @param {number} y - The vertical position of this Circle in the world.
	 * @memberof Objects.Circle
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @memberof Objects.Circle
	 */
	get x() { return this._x - this.radius * this.origin.x * this.scale.x; }

	/**
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @memberof Objects.Circle
	 */
	get y() { return this._y - this.radius * this.origin.y * this.scale.y; }

	/**
	 * @description
	 * Sets the radius of the Circle.
	 * 
	 * @example
	 * new Circle(400, 300, 50).setRadius(100); // 100
	 * 
	 * @param {number} radius - The radius of this Circle.
	 * @returns {Circle} This Circle.
	 * @memberof Objects.Circle
	 */
	setRadius(radius) {
		this.radius = radius;
		return this;
	}

	/**
	 * @description
	 * Returns the top side position of the Circle.
	 * 
	 * @example
	 * new Circle(400, 300, 50).getTop(); // 275
	 * 
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @memberof Objects.Circle
	 */
	getTop() { return this.y - this.radius; }

	/**
	 * @description
	 * Returns the bottom side position of the Circle.
	 * 
	 * @example
	 * new Circle(400, 300, 50).getBottom(); // 325
	 * 
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @memberof Objects.Circle
	 */
	getBottom() { return this.y + this.radius; }

	/**
	 * @description
	 * Returns the left side position of the Circle.
	 * 
	 * @example
	 * new Circle(400, 300, 50).getLeft(); // 375
	 * 
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @memberof Objects.Circle
	 */
	getLeft() { return this.x - this.radius; }

	/**
	 * @description
	 * Returns the right side position of the Circle.
	 * 
	 * @example
	 * new Circle(400, 300, 50).getRight(); // 425
	 * 
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @memberof Objects.Circle
	 */
	getRight() { return this.x + this.radius; }

	/**
	 * @description
	 * Returns a box that encloses the Circle.
	 * 
	 * @example
	 * new Circle(400, 300, 50).getBounds(); // { x: 375, y: 275, width: 150, height: 150 }
	 * 
	 * @returns {Object} A box that encloses the Circle.
	 * @memberof Objects.Circle
	 */
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; }
}
