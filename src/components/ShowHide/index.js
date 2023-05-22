// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  mountFirstName = () => {
    const {firstName} = this.state
    this.setState({firstName: !firstName})
  }

  mountLastName = () => {
    const {lastName} = this.state
    this.setState({lastName: !lastName})
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="btncontainer">
          <div className="btncontainer1">
            <button className="btn" type="button" onClick={this.mountFirstName}>
              Show/Hide Firstname
            </button>
            {firstName ? <p className="firstnamepara">Joe</p> : ''}
          </div>
          <div className="btncontainer2">
            <button className="btn" type="button" onClick={this.mountLastName}>
              Show/Hide Lastname
            </button>
            {lastName ? <p className="lastnamepara">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
