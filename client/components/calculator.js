import React, {Component} from 'react'

class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="calculator">
          <div className="display" />

          <div className="buttons">
            <table>
              <tr>
                <td><button>7</button></td>
                <td><button>8</button></td>
                <td><button>9</button></td>
                <td><button>+</button></td>
                <td><button>-</button></td>
              </tr>
              <tr>
                <td><button>4</button></td>
                <td><button>5</button></td>
                <td><button>6</button></td>
                <td><button>*</button></td>
                <td><button>/</button></td>
              </tr>
              <tr>
                <td><button>3</button></td>
                <td><button>2</button></td>
                <td><button>1</button></td>
                <td><button>.</button></td>
                <td><button>=</button></td>
              </tr>
              <tr>
                <td><button>0</button></td>
              </tr>
            </table>
          </div>

          <div className="output" />
        </div>
        <div className="labels" />
      </div>
    )
  }
}

export default Calculator
