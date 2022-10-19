/**
 * @class Fibonacci
 * @classdesc
 * A algorithm to work fibonacci.
 * 
 * Example: {@link https://codesandbox.io/s/201flaviosilva-utils-fibonacci-cnbxyv}
 * @see {@link https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci}
 * 
 * @example new Fibonacci();
 * @example
 *	const f = new Fibonacci();
 *	for (i = 0; i < 10; i++) console.log(f.next()); // 1,2,3,5,8,13,21,34,55,89
 *	for (i = 0; i < 5; i++) console.log(f.before()); // 55,34,21,13,8
 * 
 * @constructor
 */
export class Fibonacci {
	constructor() {
		this.lastNumber = 0;
		this.currentNumber = 1;
		this.sequence = [0];
	}

	/**
	 * Return the next number in the fibonacci sequence
	 * 
	 * @example new Fibonacci().next(); // 1
	 * 
	 * @returns {number}
	 * @memberof Fibonacci
	 */
	next() {
		const x = this.currentNumber + this.lastNumber;
		this.lastNumber = this.currentNumber;
		this.currentNumber = x;

		this.sequence.push(x);

		return this.currentNumber;
	}

	/**
	 * Return the next number in the fibonacci sequence
	 * 
	 * @example
	 * const f = new Fibonacci()
	 * f.next(); // 1
	 * f.next(); // 2
	 * f.before() // 1
	 * 
	 * @returns {number}
	 * @memberof Fibonacci
	 */
	before() {
		if (this.sequence.length > 1) {
			this.lastNumber = this.currentNumber - this.lastNumber;
			this.currentNumber = this.currentNumber - this.lastNumber;

			this.sequence.pop();

			return this.currentNumber;
		}
	}
}
