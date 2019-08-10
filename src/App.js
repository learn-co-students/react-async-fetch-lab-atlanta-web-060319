// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			people: []
		}
	}

	makePeopleATags = () => {
		let peopleATags = this.state.people.map((person) => <a>{person.name}<br/></a>)
		return peopleATags
	}


	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
		.then((response) => (response.json()))
		// .then((jso) => console.log(jso.people))
		.then((jso) => this.setState(jso))
	}

	render() {
		return (
			<div>
				{this.makePeopleATags()}
			</div>
		)
	}
}