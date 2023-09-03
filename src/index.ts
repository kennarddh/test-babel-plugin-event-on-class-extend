class X {
	static name = '"I\'m X"'

	// I don't know the type for class but not the instance
	static onExtend(targetClass: any) {
		console.log(`Class X is extended by ${targetClass.name}`)
	}
}

class Y extends X {
	static name = '"I\'m Y"'
}
