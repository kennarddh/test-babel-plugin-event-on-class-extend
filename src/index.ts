class X {
	static name = '"I\'m X"'

	public instanceMethod() {}

	// new (...args: any[]) => X Prevent calling instance method
	static onExtendCustom(targetClass: new (...args: any[]) => X) {
		console.log(`Class X is extended by ${targetClass.name}`)
		// targetClass.instanceMethod() This will throw error
	}
}

class Y extends X {
	static name = '"I\'m Y"'
}
