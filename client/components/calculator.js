import React, {Component} from 'react'

import axios from 'axios'
import {Labels} from './'

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNumber: '',
      secondNumber: '',
      result: 0,
      operation: '',
      title: ''
    }
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  performOp() {
    let firstNumber = Number(this.state.firstNumber)
    let secondNumber = Number(this.state.secondNumber)

    let result

    switch (this.state.operation) {
      case '+':
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case '*':
        result = firstNumber * secondNumber
        break
      case '/':
        result = firstNumber / secondNumber
        break
      default:
        result = ''
    }

    this.setState({result})
  }

  handleSubmit(evt) {
    evt.preventDefault()

    let firstNumber = Number(this.state.firstNumber)
    let secondNumber = Number(this.state.secondNumber)
    const {result, title, operation} = this.state

    axios
      .post('/api/labels', {
        firstNumber,
        secondNumber,
        operation,
        result,
        title
      })
      .then(res => res.data)
      .then(() => {
        this.loadLabels();
      })
      .catch(err => {
        console.error(err)
      })
  }

  loadLabels() {
    return axios.get('/api/labels')
      .then(res => res.data)
      .then(labels => labels)
      .catch(err => err);
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="calculator">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="firstNumber">
              Enter first number:{' '}
              <input
                name="firstNumber"
                type="text"
                value={this.state.firstNumber}
                onChange={this.handleChange.bind(this)}
              />
            </label>

            <label htmlFor="secondNumber">
              Enter second number:{' '}
              <input
                name="secondNumber"
                type="text"
                value={this.state.secondNumber}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label htmlFor="operation">
              Select an operation:
              <select
                name="operation"
                value={this.state.operation}
                onChange={this.handleChange.bind(this)}
              >
                <option value="" />
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </label>

            <div>
              <div className="output">
                <button type="button" onClick={this.performOp.bind(this)}>
                  Calculate
                </button>
                <h2>{this.state.result}</h2>
              </div>
              <div className="save-label">
                <label>
                  Save result as a label:
                  <input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                    placeholder="title"
                  />
                </label>
                <button type="submit">Save</button>
              </div>
            </div>
          </form>
        </div>

        <div className="labels">
          <Labels loadLabels={this.loadLabels}/>
        </div>
      </div>
    )
  }
}

export default Calculator
