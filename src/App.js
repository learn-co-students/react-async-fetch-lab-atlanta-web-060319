// create your App component here
import React from 'react'

class App extends React.Component{
    constructor(){
    super()
        this.state = {
            peopleInSpace: [ ]
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then((data) => this.setState({peopleInSpace: data.people}))
    }


    render(){
        return(
            <div>
                {this.state.peopleInSpace.map((person, id) => <h4 key={id}>{person.name}</h4>)}
            </div>
        )
    }

    

}
export default App;
