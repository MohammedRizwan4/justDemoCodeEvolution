import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            city: 'rajkot'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        }, () => console.log(this.state))
    }

    // method is binded as arrow fucntion and also it is take event param by default
    handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state))
    }

    render() {
        const { username, comments, city } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" value={username} name='username' onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Comments</label>
                        <textarea value={comments} name='comments' onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Select box</label>
                        <select name="city" id="city" onChange={this.handleChange}>
                            <option value="rajkot">Rajkot</option>
                            <option value="surat">Surat</option>
                            <option value="bombay">Bombay</option>
                        </select>
                    </div>
                    {/* alternate buttons - but when i have focus in any input (not textarea as it will simply enter it) then press enter key it will submit form */}
                    <input type="submit" value="Submit" />



                    {/* here we have to click submitn button then only it will work */}
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        )
    }
}
