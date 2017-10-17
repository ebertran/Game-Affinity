import React, { Component } from 'react'

class Test extends Component {
    constructor() {
        super()

        this.state = {
            testResult: []
        }
    }
}
	const orderedTest = []
	const orderTest = function(items) {
		items.forEach(function(element) {
			orderedTest.push(element.id)
		})
	}
    
    const randTest = orderedTest[Math.floor(Math.random() * orderedTest.length)]

    render() {
		// TODO
    }

	