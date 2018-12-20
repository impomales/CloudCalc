import React, {Component} from 'react'

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operation: '',
      title: ''
    }
  }
  render() {
    return (
      <div>
        <div className="calculator">
          <div className="display" />

          <div className="buttons">
            <table>
              <tr>
                <td>
                  <button type="button">7</button>
                </td>
                <td>
                  <button type="button">8</button>
                </td>
                <td>
                  <button type="button">9</button>
                </td>
                <td>
                  <button type="button">+</button>
                </td>
                <td>
                  <button type="button">-</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button">4</button>
                </td>
                <td>
                  <button type="button">5</button>
                </td>
                <td>
                  <button type="button">6</button>
                </td>
                <td>
                  <button type="button">*</button>
                </td>
                <td>
                  <button type="button">/</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button">3</button>
                </td>
                <td>
                  <button type="button">2</button>
                </td>
                <td>
                  <button type="button">1</button>
                </td>
                <td>
                  <button type="button">.</button>
                </td>
                <td>
                  <button type="button">=</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button">0</button>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <div className="output" />
            <button type="submit">Save</button>
          </div>
        </div>
        <div className="labels" />
      </div>
    )
  }
}

export default Calculator
