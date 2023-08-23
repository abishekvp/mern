import React, { PureComponent } from 'react'

export default class Signup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { username: '', email:'', password:'' };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);

      fetch('http://localhost:3000/signup', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
      }).then(function(response) {
          console.log(response)
          return response.json();
      });
      event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form method='post' onSubmit={this.handleSubmit}>
          <input type='text' name='username' id='username' placeholder='username'/>
          <input type='email' name='email' id='email' placeholder='Email'/>
          <input type='password' name='password' id='password' placeholder='Password'/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}
