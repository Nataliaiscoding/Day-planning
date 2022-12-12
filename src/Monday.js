import { Component } from "react";
import Check from "./check.png";

export class Monday extends Component {
    state = {
        userInput: "",
        Monday: []

    }


    onChangeEvent(event) {
        this.setState({userInput: event})
    }

    addItem(input) {
        if (input === '') {
            alert ("Please, write your plan!")
        } else {
        let listArray = this.state.Monday;
        listArray.push(input);
        this.setState({Monday: listArray, userInput: ""})
    }
}

deleteItem() {
    let listArray = this.state.Monday;
    listArray = [];
    this.setState({Monday: listArray})
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="oneDay">
                    <div className="day">
                        <h1>Monday</h1>
                    </div>
            <div className="container">
                <input type="text" 
                placeholder="What's your plan for today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={ () => this.addItem(this.state.userInput)} className="addBtn">Add</button>
            </div>
            <ul>
                {this.state.Monday.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={Check} width="40px" alt="img"/>
                        {item}</li>
                ))}
                
            </ul>
            <div className="container">
                <button onClick={ () => this.deleteItem(this.state.userInput)} className="deleteBtn">Delete</button>
            </div>
            </div>
            </form>
            </div>
        )
    }
}