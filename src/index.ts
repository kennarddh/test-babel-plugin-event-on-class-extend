class X {
	static onExtend(targetClass: X) {
		console.log(`Class X is extended by ${targetClass.toString()}`)
	}
}

class Y extends X {
	toString() {
		return 'Y'
	}
}
