class X {
	static onExtend(targetClass: X) {
		// Typescript hack I don't know why its not defined
		console.log(`Class X is extended by ${(targetClass as any).name}`)
	}
}

class Y extends X {
	toString() {
		return 'Y'
	}
}
