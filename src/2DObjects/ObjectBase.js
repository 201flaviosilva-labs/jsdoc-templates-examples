/**
 * @param {number} x - The horizontal position of this Object in the world.
 * @param {number} y - The vertical position of this Object in the world.
 * @param {number | string} [fillColor=0xffffff] - The color the Object will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Object, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * The base class for a 2D objects.
 * Probably you don't need to use this class directly.
 * Use this class to extend your own objects.
 * 
 * @example
 * class MyObject extends ObjectBase {
 * 	constructor(x, y, fillColor, strokeColor, ...args) {
 * 		super(x, y, fillColor, strokeColor);
 * 	}
 * }
 * 
 * @class ObjectBase
 * @constructors
 * @memberof Objects
 */
export default class ObjectBase {
	constructor(x, y, fillColor, strokeColor) {
		this.id = Math.random();
		this.name = `Obj - ${this.id}`;

		// Render
		this._x = x; // Get the real position X
		this._y = y; // Get the real position Y
		this.rotation = 0; // Rotation in radians
		this.angle = 0; // Rotation in degrees
		this.scale = { x: 1, y: 1 };

		this.lastPosition = { x: this._x, y: this._y, z: this.z };
		this.origin = { x: 0, y: 0 };
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.strokeWidth = 1;
		this.visible = true;
	}

	/**
	 * @description
	 * Set the object's name.
	 * 
	 * @example
	 * obj.setName("My Object");
	 * 
	 * @param {string} name - The name of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setName(name) {
		this.name = name;
		return this;
	}

	/**
	 * @description
	 * Set the horizontal position of the object in the world based on the origin.
	 * 
	 * @example
	 * obj.setX(100);
	 * 
	 * @param {number} x - The horizontal position of the object in the world.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setX(x) {
		this.setPosition(x + (this.width || this.radius) * this.origin.x, this._y);
		return this;
	}

	/**
	 * @description
	 * Set the vertical position of the object in the world based on the origin.
	 * 
	 * @example
	 * obj.setY(100);
	 * 
	 * @param {number} y - The vertical position of the object in the world.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setY(y) {
		this.setPosition(this._x, y + (this.height || this.radius) * this.origin.y);
		return this;
	}

	/**
	 * @description
	 * Set the position of the object in the world.
	 * 
	 * @example
	 * obj.setPosition(100, 100, 100);
	 * 
	 * @param {number} x - The horizontal position of the object in the world.
	 * @param {number} y - The vertical position of the object in the world.
	 * @param {number} z - The Z position of the object in the world.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setPosition(x, y) {
		this.lastPosition = { x: this.x, y: this.y };

		this._x = x;
		this._y = y;
		return this;
	}

	/**
	 * @description
	 * Set the rotation of the object in the world based in radians.
	 * 
	 * @example
	 * obj.setRotation(1.5);
	 * 
	 * @param {number} rotation - The rotation of the object in the world in radians.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setRotation(rotation) {
		this.rotation = rotation;
		this.angle = UtilsMathInstance.radiansToDegrees(rotation);
		return this;
	}

	/**
	 * @description
	 * Set the angle of the object in the world based in degrees.
	 * 
	 * @example
	 * obj.setAngle(90);
	 * 
	 * @param {number} angle - The angle of the object in the world in degrees.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setAngle(angle) {
		this.angle = angle;
		this.rotation = UtilsMathInstance.degreesToRadians(angle);
		return this;
	}

	/**
	 * @description
	 * Set the horizontal scale of the object.
	 * 
	 * @example
	 * obj.setScaleX(2);
	 * 
	 * @param {number} scaleX - The horizontal scale of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setScaleX(x) {
		this.setScale(x, this.scale.y);
		return this;
	}

	/**
	 * @description
	 * Set the vertical scale of the object.
	 * 
	 * @example
	 * obj.setScaleY(2);
	 * 
	 * @param {number} scaleY - The vertical scale of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setScaleY(y) {
		this.setScale(this.scale.x, y);
		return this;
	}

	/**
	 * @description
	 * Set the horizontal and vertical scale of the object.
	 * 
	 * @example
	 * obj.setScale(2);
	 * 
	 * @param {number} scale - The scale of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setScale(x = 0, y = x) {
		this.scale = { x, y };
		return this;
	}

	/**
	 * @description
	 * Set the fill color of the object.
	 * 
	 * @example
	 * obj.setFillColor("#FF0000");
	 * 
	 * @param {string} color - The fill color of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setFillColor(fillColor) {
		this.fillColor = fillColor;
		return this;
	}

	/**
	 * @description
	 * Set the stroke/border color of the object.
	 * 
	 * @example
	 * obj.setStrokeColor("#FF0000");
	 * 
	 * @param {string} color - The stroke color of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setStrokeColor(strokeColor) {
		this.strokeColor = strokeColor;
		return this;
	}

	/**
	 * @description
	 * Set the stroke/border width of the object.
	 * 
	 * @example
	 * obj.setStrokeWidth(2);
	 * 
	 * @param {number} width - The stroke width of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setStrokeWidth(strokeWidth) {
		this.strokeWidth = strokeWidth;
		return this;
	}

	/**
	 * @description
	 * Set the visibility of the object.
	 * 
	 * @example
	 * obj.setVisible(false);
	 * 
	 * @param {boolean} visible - The visibility of the object.
	 * @returns {Object}
	 * @memberof Objects.ObjectBase	 */
	setVisible(isVisible) {
		this.visible = isVisible;
		return this;
	}
}
