const stack = [];

const cl = console.log;

const start = (options = {}) => {
	console.log = (...args) => {
		const message = args.join(' ');
		stack.push(message);
		if (options.passThrough !== false) {
			cl(message);
		}
	}
};

const stop = () => {
	console.log = cl
};

module.exports = {
	start,
	stop,
	stack
};