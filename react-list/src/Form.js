import React, { Component } from 'react'

class Form extends Component {
    

    //object of state to reset the object
    initialState = {
        name: '',
        job: '',
        age: '',
        active: 'true',
    }

    //state will receive empty object
    state = this.initialState

    submitForm = () => {

        this.props.handleSubmit(this.state)

        this.setState(this.initialState)
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
        console.log(event.target.value)
    }


    render() {

        //here i mount the object from form
        const { name, job, age } = this.state;

        return (
            <form>

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>

                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <label htmlFor="age">Age</label>

                <input
                    type="number"
                    name="age"
                    id="age"
                    value={age}
                    onChange={this.handleChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;