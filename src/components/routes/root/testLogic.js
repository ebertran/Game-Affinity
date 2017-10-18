import React, { Component } from 'react'

const items = [{
        id: 1,
        question: "Are you more comfortable, as a player in an online game:",
        answers: {
            "Talking with friends in a tavern": "s",
            "Out hunting orcs by yourself for experience?": "a"
        }
    },
    {
        id: 2,
        question: "Which do you enjoy more in quests?",
        answers: {
            "Getting involved in the storyline": "s",
            "Getting the rewards at the end": "a"
        }
    },
    {
        id: 3,
        question: "Would you rather be:",
        answers: {
            "Popular?": "s",
            "Wealthy?": "a"
        }
    }
]

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

    
    randTest.forEach(function(element) {
        render() {
    const answer1 = Object.keys(element.answers[0]);
    const answer2 = Object.keys(element.answers[1]);
    const answer1value = element.answers[answer1];
    const answer2value = element.answers[answer2];
    
  }
}
        }
    })
    
    render() {
		// TODO
    }

	