import React, {Component} from 'react'

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operation: '',
      title: '',
      hasFirst: false,
      hasSecond: false
    }
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <form>
            <label htmlFor="firstNumber">
              Enter first number:{' '}
              <input
                name="firstNumber"
                type="text"
                value={this.state.firstNumber}
              />
            </label>

            <label htmlFor="secondNumber">
              Enter second number:{' '}
              <input
                name="secondNumber"
                type="text"
                value={this.state.secondNumber}
              />
            </label>
            <label htmlFor="operation">
              Select an operation:
              <select name="operation">
                <option value="" />
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </label>

            <div>
              <div className="output">
                <button type="button">Calculate</button>
                <h2>{this.state.result}</h2>
              </div>
              <div className="save-label">
                <label>
                  Save result as a label:
                  <input
                    type="text"
                    value={this.state.title}
                    placeholder="title"
                  />
                </label>
                <button type="submit">Save</button>
              </div>
            </div>
          </form>
        </div>

        <div className="labels" />
      </div>
    )
  }
}

export default Calculator
