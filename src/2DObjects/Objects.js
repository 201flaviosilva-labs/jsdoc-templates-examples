import ObjectBase from "./Object.js";
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";

/**
 * @namespace Objects
 * 
 * @property {Objects.GameObjectBase} ObjectBase
 * 
 * @property {Objects.Circle} Circle
 * @property {Objects.Rectangle} Rectangle
 */
export default class Objects {
	constructor() {
		this.ObjectBase = ObjectBase;

		this.Circle = Circle;
		this.Rectangle = Rectangle;
	}
}

export const ObjectsInstance = new Objects();
