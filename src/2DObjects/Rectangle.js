import Object from "./Object.js";

/**
 * @param {number} x - The horizontal position of this rectangle
 * @param {number} y - The vertical position of this rectangle
 * @param {number} [width=100] - The width of the rectangle.
 * @param {number} [height=100] - The height of the rectangle.
 * @param {number | string} [fillColor=0xffffff] - The color the rectangle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the rectangle, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * The Rectangle Shape is a 2D Object. 
 * Its possible to set a rounder corner radius.
 * 
 * @example
 * const rect = new Rectangle(400, 300, 75, 50, "#ff0000", 0x00ff00);
 * 
 * @class Rectangle
 * @extends Object
 * @constructors
 * @memberof Objects
 */
export default class Rectangle extends Object {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);

		this.width = width;
		this.height = height;
	}

	/**
	 * @description
	 * Sets the X position of the rectangle.
	 * 
	 * @param {number} x - The horizontal position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	set x(x) { this.setX(x); }

	/**
	 * @description
	 * Gets the Y position of the rectangle.
	 * 
	 * @param {number} y - The vertical position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }

	/**
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }


	/**
	 * @description
	 * Returns the bottom side position of the rectangle.
	 * 
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getBottom() { return this.y + this.height; }

	/**
	 * @description
	 * Returns the right side position of the rectangle.
	 * 
	 * 
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getRight() { return this.x + this.width; }

	/**
	 * @description
	 * Returns the center X position of the rectangle.
	 * 
	 * @example
	 * new Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterX(); // 27.5
	 * 
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getCenterX() { return this.x + this.width / 2; }

	/**
	 * @description
	 * Returns the center Y position of the rectangle.
	 * 
	 * @example
	 * new Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterY(); // 27.5
	 * 
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getCenterY() { return this.y + this.height / 2; }

	/**
	 * @description
	 * Sets the width of the rectangle.
	 * 
	 * @example
	 * new Rectangle(10, 10, 100, 100).setWidth(200);
	 * 
	 * @param {number} width - The new width of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}

	/**
	 * @description
	 * Sets the height of the rectangle.
	 * 
	 * @example
	 * new Rectangle(10, 10, 100, 100).setHeight(200);
	 * 
	 * @param {number} height - The new height of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}

	/**
	 * @description
	 * Sets the size of the rectangle.
	 * 
	 * @example
	 * new Rectangle(10, 10, 100, 100).setSize(50, 50);
	 * 
	 * @param {number} width - The new width of this Rectangle.
	 * @param {number} height - The new height of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setSize(width, height = width) {
		this.width = width;
		this.height = height;
		return this;
	}

	/**
	 * @description
	 * Gets the bounding box of this Rectangle.
	 * 
	 * @example
	 * new Rectangle(0, 0).getBoundingBox(); // { x: 0, y: 0, width: 100, height: 100 }
	 * 
	 * @returns {Object} The bounding box of this Rectangle.
	 * @memberof Rectangle
	 */
	getBounds() { return { x: this.x, y: this.y, width: this.width, height: this.height }; }

	/**
	 * @description
	 * Gets the area of this Rectangle.
	 * 
	 * @example
	 * new Rectangle(0, 0, 100, 100).getArea(); // 10000
	 * 
	 * @returns {number} The area of this Rectangle.
	 * @memberof Rectangle
	 * @readonly
	 */
	getArea() { return this.width * this.height; }

	/**
	 * @description
	 * Gets the perimeter of this Rectangle.
	 * 
	 * @example
	 * new Rectangle(0, 0, 100, 100).getPerimeter(); // 200
	 * 
	 * @returns {number} The perimeter of this Rectangle.
	 * @memberof Rectangle
	 * @readonly
	 */
	getPerimeter() { return 2 * (this.width + this.height); }
}
